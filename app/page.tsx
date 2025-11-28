"use client"

import { useState } from "react"
import type { ReportNode } from "@/data/reports"
import { GraphContainer } from "@/components/graph/graph-container"
import { ReportDrawer } from "@/components/report/report-drawer"
import { Legend } from "@/components/legend"
import { StatsCards } from "@/components/stats-cards"
import { GraphModeToggle } from "@/components/graph-mode-toggle"
import { ClusterFilter } from "@/components/cluster-filter"
import { GraphProvider, useGraphContext } from "@/lib/graph-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { Network, GraduationCap, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

function HomeContent() {
  const [selectedReport, setSelectedReport] = useState<ReportNode | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [filterCluster, setFilterCluster] = useState<string | null>(null)
  const { state } = useGraphContext()

  const handleNodeClick = (node: ReportNode) => {
    setSelectedReport(node)
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const getInstructions = () => {
    if (state.mode === "clusters") {
      return (
        <p>
          <kbd className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px]">Clique</kbd> em um cluster para
          explorar • <kbd className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px]">Scroll</kbd> para zoom
        </p>
      )
    }
    return (
      <p>
        <kbd className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px]">Scroll</kbd> para zoom •{" "}
        <kbd className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px]">Arraste</kbd> para mover
      </p>
    )
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Network className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Grafo de Conhecimento</h1>
              <p className="text-xs text-muted-foreground">Gestão do Conhecimento - 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p className="text-sm">
                  Clique nos nós para ver os relatórios. Arraste para reorganizar. Use scroll para zoom. Arraste o fundo
                  para navegar.
                </p>
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Projeto Universitário</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Stats and Controls */}
        <div className="border-b border-border bg-background/50 px-4 py-4">
          <div className="mx-auto max-w-7xl space-y-4">
            <StatsCards />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <GraphModeToggle />
              <Legend />
            </div>
            {state.mode === "expanded" && (
              <ClusterFilter selectedCluster={filterCluster} onSelectCluster={setFilterCluster} />
            )}
          </div>
        </div>

        {/* Graph Container */}
        <div className="relative flex-1">
          <div className="absolute inset-0">
            <GraphContainer onNodeClick={handleNodeClick} filterCluster={filterCluster} />
          </div>

          {/* Instructions overlay */}
          <div className="pointer-events-none absolute bottom-4 left-4 z-10">
            <div className="rounded-lg border border-border/50 bg-card/80 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm">
              {getInstructions()}
            </div>
          </div>
        </div>
      </div>

      {/* Report Drawer */}
      <ReportDrawer report={selectedReport} open={drawerOpen} onClose={handleDrawerClose} />
    </main>
  )
}

export default function Home() {
  return (
    <TooltipProvider>
      <GraphProvider>
        <HomeContent />
      </GraphProvider>
    </TooltipProvider>
  )
}
