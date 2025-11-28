"use client"

import { useGraphContext } from "@/lib/graph-context"
import { KnowledgeGraph } from "./knowledge-graph"
import { ClusterGraph } from "./cluster-graph"
import type { ReportNode } from "@/data/reports"

interface GraphContainerProps {
  onNodeClick: (node: ReportNode) => void
  filterCluster?: string | null
}

export function GraphContainer({ onNodeClick, filterCluster }: GraphContainerProps) {
  const { state } = useGraphContext()
  const { mode, selectedClusterId } = state

  if (mode === "clusters") {
    return <ClusterGraph />
  }

  if (mode === "cluster-detail") {
    return <KnowledgeGraph onNodeClick={onNodeClick} selectedCluster={selectedClusterId} />
  }

  return <KnowledgeGraph onNodeClick={onNodeClick} selectedCluster={filterCluster ?? null} />
}
