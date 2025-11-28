"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import * as d3 from "d3"
import { reports, graphLinks, clusterColors } from "@/data/reports"
import { getClusterRelationship } from "@/data/links"
import { useGraphContext } from "@/lib/graph-context"
import { useTheme } from "next-themes"
import { EdgePopover, type EdgePopoverData } from "./edge-popover"

interface ClusterNode extends d3.SimulationNodeDatum {
  id: string
  name: string
  reportCount: number
  color: string
}

interface ClusterLink extends d3.SimulationLinkDatum<ClusterNode> {
  source: ClusterNode
  target: ClusterNode
  weight: number
}

export function ClusterGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const { enterClusterDetail } = useGraphContext()
  const { resolvedTheme } = useTheme()

  const [edgePopover, setEdgePopover] = useState<{
    data: EdgePopoverData | null
    position: { x: number; y: number } | null
    visible: boolean
  }>({ data: null, position: null, visible: false })

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const { width, height } = dimensions
    const isDark = resolvedTheme === "dark"

    // Build cluster nodes
    const clusterMap = new Map<string, number>()
    reports.forEach((r) => {
      clusterMap.set(r.cluster, (clusterMap.get(r.cluster) || 0) + 1)
    })

    const clusterNodes: ClusterNode[] = Array.from(clusterMap.entries()).map(([name, count]) => ({
      id: name,
      name,
      reportCount: count,
      color: clusterColors[name] || "#888",
    }))

    // Build cluster links based on cross-cluster connections
    const clusterLinkMap = new Map<string, number>()
    const reportClusterMap = new Map<string, string>()
    reports.forEach((r) => reportClusterMap.set(r.id, r.cluster))

    graphLinks.forEach((link) => {
      const sourceCluster = reportClusterMap.get(link.source)
      const targetCluster = reportClusterMap.get(link.target)
      if (sourceCluster && targetCluster && sourceCluster !== targetCluster) {
        const key = [sourceCluster, targetCluster].sort().join("--")
        clusterLinkMap.set(key, (clusterLinkMap.get(key) || 0) + 1)
      }
    })

    const clusterLinks: ClusterLink[] = Array.from(clusterLinkMap.entries()).map(([key, weight]) => {
      const [source, target] = key.split("--")
      return { source: source as unknown as ClusterNode, target: target as unknown as ClusterNode, weight }
    })

    // Create container group for zoom
    const g = svg.append("g")

    // Create zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => {
        g.attr("transform", event.transform)
      })

    svg.call(zoom)

    // Create gradient definitions
    const defs = svg.append("defs")

    clusterNodes.forEach((cluster) => {
      const gradient = defs
        .append("radialGradient")
        .attr("id", `cluster-gradient-${cluster.id.replace(/\s+/g, "-")}`)
        .attr("cx", "30%")
        .attr("cy", "30%")
        .attr("r", "70%")

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d3.color(cluster.color)?.brighter(0.8)?.toString() || cluster.color)

      gradient.append("stop").attr("offset", "100%").attr("stop-color", cluster.color)
    })

    // Add glow filter
    const filter = defs
      .append("filter")
      .attr("id", "cluster-glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%")

    filter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "coloredBlur")

    const feMerge = filter.append("feMerge")
    feMerge.append("feMergeNode").attr("in", "coloredBlur")
    feMerge.append("feMergeNode").attr("in", "SourceGraphic")

    // Initialize simulation
    const simulation = d3
      .forceSimulation<ClusterNode>(clusterNodes)
      .force(
        "link",
        d3
          .forceLink<ClusterNode, ClusterLink>(clusterLinks)
          .id((d) => d.id)
          .distance(200),
      )
      .force("charge", d3.forceManyBody().strength(-800))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => (d as ClusterNode).reportCount * 12 + 40),
      )

    const link = g
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(clusterLinks)
      .enter()
      .append("line")
      .attr("stroke", isDark ? "#3f3f46" : "#d4d4d8")
      .attr("stroke-opacity", 0.5)
      .attr("stroke-width", (d) => Math.sqrt(d.weight) * 2)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        // Visual feedback on hover
        d3.select(this)
          .transition()
          .duration(150)
          .attr("stroke-opacity", 0.9)
          .attr("stroke-width", Math.sqrt(d.weight) * 3 + 2)
          .attr("stroke", isDark ? "#71717a" : "#a1a1aa")

        // Get cluster relationship metadata
        const linkData = d as { source: string | ClusterNode; target: string | ClusterNode; weight: number }
        const sourceId = typeof linkData.source === "string" ? linkData.source : linkData.source.id
        const targetId = typeof linkData.target === "string" ? linkData.target : linkData.target.id

        const relationship = getClusterRelationship(sourceId, targetId)

        if (relationship) {
          setEdgePopover({
            data: {
              sourceTitle: sourceId,
              targetTitle: targetId,
              description: relationship.description,
              similarities: relationship.similarities,
              differences: relationship.differences,
            },
            position: { x: event.pageX, y: event.pageY },
            visible: true,
          })
        }
      })
      .on("mousemove", (event) => {
        setEdgePopover((prev) => ({
          ...prev,
          position: { x: event.pageX, y: event.pageY },
        }))
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .transition()
          .duration(150)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-width", Math.sqrt(d.weight) * 2)
          .attr("stroke", isDark ? "#3f3f46" : "#d4d4d8")

        setEdgePopover((prev) => ({ ...prev, visible: false }))
      })

    // Draw nodes
    const node = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(clusterNodes)
      .enter()
      .append("g")
      .attr("class", "cluster-node")
      .style("cursor", "pointer")
      .call(
        d3
          .drag<SVGGElement, ClusterNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on("drag", (event, d) => {
            d.fx = event.x
            d.fy = event.y
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0)
            d.fx = null
            d.fy = null
          }),
      )

    // Add circles to nodes with size based on report count
    node
      .append("circle")
      .attr("r", (d) => d.reportCount * 12 + 30)
      .attr("fill", (d) => `url(#cluster-gradient-${d.id.replace(/\s+/g, "-")})`)
      .attr("stroke", (d) => d.color)
      .attr("stroke-width", 3)
      .attr("stroke-opacity", 0.6)

    // Add report count badge
    node
      .append("circle")
      .attr("r", 16)
      .attr("cy", (d) => -(d.reportCount * 12 + 30) + 12)
      .attr("fill", isDark ? "#18181b" : "#ffffff")
      .attr("stroke", (d) => d.color)
      .attr("stroke-width", 2)

    node
      .append("text")
      .text((d) => d.reportCount)
      .attr("y", (d) => -(d.reportCount * 12 + 30) + 12)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("fill", isDark ? "#fafafa" : "#18181b")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .style("pointer-events", "none")

    // Add labels
    node
      .append("text")
      .text((d) => d.name)
      .attr("dy", 5)
      .attr("text-anchor", "middle")
      .attr("fill", "#fff")
      .attr("font-size", "13px")
      .attr("font-weight", "600")
      .style("pointer-events", "none")
      .style("text-shadow", "0 1px 3px rgba(0,0,0,0.5)")

    // Interaction handlers
    node
      .on("mouseover", function (event, d) {
        d3.select(this)
          .select("circle:first-child")
          .transition()
          .duration(200)
          .attr("r", d.reportCount * 12 + 40)
          .attr("filter", "url(#cluster-glow)")

        // Show tooltip
        const tooltip = d3.select("#cluster-tooltip")
        tooltip
          .style("opacity", 1)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY - 10 + "px")
          .html(
            `<strong style="color: ${d.color}">${d.name}</strong>
            <br/>
            <span class="text-muted-foreground">${d.reportCount} relatórios</span>
            <br/>
            <span class="text-xs text-muted-foreground">Clique para explorar</span>`,
          )
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .select("circle:first-child")
          .transition()
          .duration(200)
          .attr("r", d.reportCount * 12 + 30)
          .attr("filter", null)

        d3.select("#cluster-tooltip").style("opacity", 0)
      })
      .on("click", (event, d) => {
        event.stopPropagation()
        enterClusterDetail(d.id)
      })

    // Update positions on tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as ClusterNode).x || 0)
        .attr("y1", (d) => (d.source as ClusterNode).y || 0)
        .attr("x2", (d) => (d.target as ClusterNode).x || 0)
        .attr("y2", (d) => (d.target as ClusterNode).y || 0)

      node.attr("transform", (d) => `translate(${d.x || 0},${d.y || 0})`)
    })

    // Initial zoom to fit
    const initialTransform = d3.zoomIdentity.translate(width * 0.1, height * 0.1).scale(0.8)
    svg.call(zoom.transform, initialTransform)

    return () => {
      simulation.stop()
    }
  }, [dimensions, enterClusterDetail, resolvedTheme])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="bg-background" />
      <div
        id="cluster-tooltip"
        className="pointer-events-none absolute z-50 max-w-xs rounded-lg border border-border bg-card p-3 opacity-0 shadow-xl transition-opacity"
        style={{ position: "fixed" }}
      />
      <EdgePopover data={edgePopover.data} position={edgePopover.position} visible={edgePopover.visible} />
    </div>
  )
}
