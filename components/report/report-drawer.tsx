"use client"

import { type ReportNode, clusterColors } from "@/data/reports"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { FileText, Link, Tag } from "lucide-react"

interface ReportDrawerProps {
  report: ReportNode | null
  open: boolean
  onClose: () => void
}

export function ReportDrawer({ report, open, onClose }: ReportDrawerProps) {
  if (!report) return null

  const clusterColor = clusterColors[report.cluster]

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl">
        <SheetHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${clusterColor}20` }}
            >
              <FileText className="h-5 w-5" style={{ color: clusterColor }} />
            </div>
            <div className="space-y-1">
              <SheetTitle className="text-left text-lg leading-tight">{report.title}</SheetTitle>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="gap-1 capitalize"
                  style={{
                    backgroundColor: `${clusterColor}20`,
                    color: clusterColor,
                    borderColor: clusterColor,
                  }}
                >
                  <Tag className="h-3 w-3" />
                  {report.cluster}
                </Badge>
              </div>
            </div>
          </div>
          <SheetDescription className="text-left text-sm">{report.summary}</SheetDescription>
        </SheetHeader>

        <Separator className="my-4" />

        <div className="space-y-4 px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link className="h-4 w-4" />
            <span>Conexões: {report.links.length} relatórios relacionados</span>
          </div>

          <ScrollArea className="h-[calc(100vh-320px)] pr-4">
            <div className="prose prose-sm prose-invert max-w-none">
              {report.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="mb-3 mt-6 text-base font-semibold text-foreground first:mt-0">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-4 text-muted-foreground">
                      {paragraph.replace("- ", "")}
                    </li>
                  )
                }
                if (paragraph.trim() === "") {
                  return null
                }
                return (
                  <p key={index} className="mb-3 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}
