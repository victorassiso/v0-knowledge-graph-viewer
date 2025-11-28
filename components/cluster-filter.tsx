"use client"

import { clusterColors } from "@/data/reports"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Filter, X } from "lucide-react"

interface ClusterFilterProps {
  selectedCluster: string | null
  onSelectCluster: (cluster: string | null) => void
}

export function ClusterFilter({ selectedCluster, onSelectCluster }: ClusterFilterProps) {
  const clusters = Object.keys(clusterColors)

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span className="hidden sm:inline">Filtrar por cluster:</span>
      </div>
      <Button
        variant={selectedCluster === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCluster(null)}
        className="h-7 text-xs"
      >
        Todos
      </Button>
      {clusters.map((cluster) => (
        <Button
          key={cluster}
          variant={selectedCluster === cluster ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCluster(selectedCluster === cluster ? null : cluster)}
          className={cn(
            "h-7 gap-1.5 text-xs capitalize",
            selectedCluster === cluster && "ring-1 ring-offset-1 ring-offset-background",
          )}
          style={{
            borderColor: clusterColors[cluster],
            ...(selectedCluster === cluster && {
              backgroundColor: clusterColors[cluster],
              color: "#fff",
            }),
          }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: clusterColors[cluster] }} />
          {cluster}
          {selectedCluster === cluster && <X className="h-3 w-3" />}
        </Button>
      ))}
    </div>
  )
}
