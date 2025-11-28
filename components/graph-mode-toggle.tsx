"use client"

import { useGraphContext } from "@/lib/graph-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Layers, Network, ArrowLeft } from "lucide-react"

export function GraphModeToggle() {
  const { state, setGraphMode, goBack } = useGraphContext()
  const { mode, selectedClusterId } = state

  const modes: { id: "clusters" | "expanded"; label: string; icon: typeof Layers }[] = [
    { id: "clusters", label: "Clusters", icon: Layers },
    { id: "expanded", label: "Expandido", icon: Network },
  ]

  if (mode === "cluster-detail") {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={goBack} className="h-8 gap-1.5 text-xs bg-transparent">
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar
        </Button>
        <span className="text-xs text-muted-foreground">
          Visualizando cluster: <span className="font-medium capitalize">{selectedClusterId}</span>
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
      {modes.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant={mode === id ? "default" : "ghost"}
          size="sm"
          onClick={() => setGraphMode(id)}
          className={cn("h-7 gap-1.5 text-xs", mode === id && "shadow-sm")}
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </Button>
      ))}
    </div>
  )
}
