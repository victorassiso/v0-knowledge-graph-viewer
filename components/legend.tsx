"use client"

import { clusterColors } from "@/data/reports"

export function Legend() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(clusterColors).map(([cluster, color]) => (
        <div key={cluster} className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-xs capitalize text-muted-foreground">{cluster}</span>
        </div>
      ))}
    </div>
  )
}
