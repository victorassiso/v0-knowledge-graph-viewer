"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import * as d3 from "d3"
import { type ReportNode, reports, graphLinks, clusterColors } from "@/data/reports"
import { getLinkMetadata } from "@/data/links"
import { useTheme } from "next-themes"
import { EdgePopover, type EdgePopoverData } from "./edge-popover"

interface KnowledgeGraphProps {
  onNodeClick: (node: ReportNode) => void
  selectedCluster: string | null
}

interface SimulationNode extends d3.SimulationNodeDatum {
  id: string
  title: string
  cluster: string
  summary: string
  content: string
  links: string[]
}

interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  source: SimulationNode
  target: SimulationNode
}

export function KnowledgeGraph({ onNodeClick, selectedCluster }: KnowledgeGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
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

    // Filter nodes by cluster if selected
    const filteredNodes: SimulationNode[] = (
      selectedCluster ? reports.filter((r) => r.cluster === selectedCluster) : reports
    ).map((r) => ({ ...r }))

    const filteredNodeIds = new Set(filteredNodes.map((n) => n.id))

    const filteredLinks = graphLinks
      .filter((l) => filteredNodeIds.has(l.source) && filteredNodeIds.has(l.target))
      .map((l) => ({ ...l }))

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

    Object.entries(clusterColors).forEach(([cluster, color]) => {
      const gradient = defs
        .append("radialGradient")
        .attr("id", `gradient-${cluster.replace(/\s+/g, "-")}`)
        .attr("cx", "30%")
        .attr("cy", "30%")
        .attr("r", "70%")

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", d3.color(color)?.brighter(0.5)?.toString() || color)

      gradient.append("stop").attr("offset", "100%").attr("stop-color", color)
    })

    // Add glow filter
    const filter = defs
      .append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%")

    filter.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "coloredBlur")

    const feMerge = filter.append("feMerge")
    feMerge.append("feMergeNode").attr("in", "coloredBlur")
    feMerge.append("feMergeNode").attr("in", "SourceGraphic")

    const link = g
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(filteredLinks)
      .enter()
      .append("line")
      .attr("stroke", isDark ? "#3f3f46" : "#d4d4d8")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        // Visual feedback on hover
        d3.select(this)
          .transition()
          .duration(150)
          .attr("stroke-opacity", 0.9)
          .attr("stroke-width", 4)
          .attr("stroke", isDark ? "#71717a" : "#a1a1aa")

        // Get link metadata
        const linkData = d as { source: string | SimulationNode; target: string | SimulationNode }
        const sourceId = typeof linkData.source === "string" ? linkData.source : linkData.source.id
        const targetId = typeof linkData.target === "string" ? linkData.target : linkData.target.id

        const metadata = getLinkMetadata(sourceId, targetId)
        const sourceNode = filteredNodes.find((n) => n.id === sourceId)
        const targetNode = filteredNodes.find((n) => n.id === targetId)

        if (metadata && sourceNode && targetNode) {
          setEdgePopover({
            data: {
              sourceTitle: sourceNode.title.slice(0, 30) + (sourceNode.title.length > 30 ? "..." : ""),
              targetTitle: targetNode.title.slice(0, 30) + (targetNode.title.length > 30 ? "..." : ""),
              description: metadata.description,
              similarities: metadata.similarities,
              differences: metadata.differences,
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
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(150)
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 1.5)
          .attr("stroke", isDark ? "#3f3f46" : "#d4d4d8")

        setEdgePopover((prev) => ({ ...prev, visible: false }))
      })

    // Draw nodes
    const node = g
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(filteredNodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .style("cursor", "pointer")
      .call(
        d3
          .drag<SVGGElement, SimulationNode>()
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

    // Add circles to nodes
    node
      .append("circle")
      .attr("r", 24)
      .attr("fill", (d) => `url(#gradient-${d.cluster.replace(/\s+/g, "-")})`)
      .attr("stroke", (d) => clusterColors[d.cluster])
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.5)

    // Add labels
    node
      .append("text")
      .text((d) => d.title.slice(0, 20) + (d.title.length > 20 ? "..." : ""))
      .attr("dy", 40)
      .attr("text-anchor", "middle")
      .attr("fill", isDark ? "#a1a1aa" : "#52525b")
      .attr("font-size", "10px")
      .attr("font-weight", "500")
      .style("pointer-events", "none")

    // Initialize simulation
    const simulation = d3
      .forceSimulation<SimulationNode>(filteredNodes)
      .force(
        "link",
        d3
          .forceLink<SimulationNode, SimulationLink>(filteredLinks as SimulationLink[])
          .id((d) => d.id)
          .distance(120),
      )
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(50))

    // Interaction handlers
    node
      .on("mouseover", function (event, d) {
        // Highlight node
        d3.select(this).select("circle").transition().duration(200).attr("r", 30).attr("filter", "url(#glow)")

        // Highlight connected links
        link
          .transition()
          .duration(200)
          .attr("stroke-opacity", (l) => {
            const linkData = l as SimulationLink
            return linkData.source.id === d.id || linkData.target.id === d.id ? 0.8 : 0.1
          })
          .attr("stroke-width", (l) => {
            const linkData = l as SimulationLink
            return linkData.source.id === d.id || linkData.target.id === d.id ? 3 : 1.5
          })
          .attr("stroke", (l) => {
            const linkData = l as SimulationLink
            return linkData.source.id === d.id || linkData.target.id === d.id
              ? clusterColors[d.cluster]
              : isDark
                ? "#3f3f46"
                : "#d4d4d8"
          })

        // Dim other nodes
        node
          .selectAll("circle")
          .transition()
          .duration(200)
          .attr("opacity", (n) => {
            const nodeData = n as SimulationNode
            const isConnected = nodeData.id === d.id || d.links.includes(nodeData.id) || nodeData.links.includes(d.id)
            return isConnected ? 1 : 0.3
          })

        // Show tooltip
        const tooltip = d3.select("#graph-tooltip")
        tooltip
          .style("opacity", 1)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 10 + "px")
          .html(
            `<strong class="text-foreground">${d.title}</strong>
            <br/>
            <span style="color: ${clusterColors[d.cluster]}">${d.cluster}</span>
            <br/>
            <span class="text-muted-foreground text-xs">${d.summary.slice(0, 100)}...</span>`,
          )
      })
      .on("mouseout", function () {
        d3.select(this).select("circle").transition().duration(200).attr("r", 24).attr("filter", null)

        link
          .transition()
          .duration(200)
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 1.5)
          .attr("stroke", isDark ? "#3f3f46" : "#d4d4d8")

        node.selectAll("circle").transition().duration(200).attr("opacity", 1)

        d3.select("#graph-tooltip").style("opacity", 0)
      })
      .on("click", (event, d) => {
        event.stopPropagation()
        const originalNode = reports.find((r) => r.id === d.id)
        if (originalNode) {
          onNodeClick(originalNode)
        }
      })

    // Update positions on tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as SimulationNode).x || 0)
        .attr("y1", (d) => (d.source as SimulationNode).y || 0)
        .attr("x2", (d) => (d.target as SimulationNode).x || 0)
        .attr("y2", (d) => (d.target as SimulationNode).y || 0)

      node.attr("transform", (d) => `translate(${d.x || 0},${d.y || 0})`)
    })

    // Initial zoom to fit
    const initialTransform = d3.zoomIdentity.translate(width * 0.1, height * 0.1).scale(0.8)
    svg.call(zoom.transform, initialTransform)

    return () => {
      simulation.stop()
    }
  }, [dimensions, selectedCluster, onNodeClick, resolvedTheme])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="bg-background" />
      <div
        id="graph-tooltip"
        className="pointer-events-none absolute z-50 max-w-xs rounded-lg border border-border bg-card p-3 opacity-0 shadow-xl transition-opacity"
        style={{ position: "fixed" }}
      />
      <EdgePopover data={edgePopover.data} position={edgePopover.position} visible={edgePopover.visible} />
    </div>
  )
}
