"use client"

import { reports, graphLinks, clusterColors } from "@/data/reports"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, GitBranch, Layers, Users } from "lucide-react"

export function StatsCards() {
  const totalReports = reports.length
  const totalConnections = graphLinks.length
  const totalClusters = Object.keys(clusterColors).length
  const avgConnections = (totalConnections / totalReports).toFixed(1)

  const stats = [
    {
      label: "Relatórios",
      value: totalReports,
      icon: FileText,
      color: "#6366f1",
    },
    {
      label: "Conexões",
      value: totalConnections,
      icon: GitBranch,
      color: "#22c55e",
    },
    {
      label: "Clusters",
      value: totalClusters,
      icon: Layers,
      color: "#f97316",
    },
    {
      label: "Média de Conexões",
      value: avgConnections,
      icon: Users,
      color: "#ec4899",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/50 bg-card/50 py-2">
          <CardContent className="flex items-center gap-3 p-4">
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
