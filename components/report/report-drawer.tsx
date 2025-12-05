"use client"

import type { ReactNode } from "react"
import { type ReportNode, clusterColors } from "@/data/reports"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { FileText, LinkIcon as LinkIcon, Tag, ExternalLink } from "lucide-react"

interface ReportDrawerProps {
  report: ReportNode | null
  open: boolean
  onClose: () => void
}

export function ReportDrawer({ report, open, onClose }: ReportDrawerProps) {
  if (!report) return null

  const clusterColor = clusterColors[report.cluster]

  function renderInlineMarkdown(text: string, keyPrefix = ""): (string | ReactNode)[] {
    const elements: (string | ReactNode)[] = []
    const regex = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match: RegExpExecArray | null
    let partIndex = 0
    while ((match = regex.exec(text)) !== null) {
      const idx = match.index
      if (idx > lastIndex) {
        elements.push(text.slice(lastIndex, idx))
      }
      elements.push(
        <strong key={`${keyPrefix}-b-${partIndex}`}>{match[1]}</strong>
      )
      partIndex++
      lastIndex = idx + match[0].length
    }
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex))
    }
    return elements
  }
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
          {report.report_link ? (
            <a
              href={report.report_link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 underline"
            >
              <ExternalLink className="h-4 w-4 text-blue-600" />
              <span>link to full report</span>
            </a>
          ) : null}

        </SheetHeader>

        <Separator className="my-4" />

        <div className="space-y-4 px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LinkIcon className="h-4 w-4" />
            <span>Conexões: {report.links.length} relatórios relacionados</span>
          </div>

          <ScrollArea className="h-[calc(100vh-320px)] pr-4">
            <div className="prose prose-sm prose-invert max-w-none">
              {report.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="mb-3 mt-6 text-base font-semibold text-foreground first:mt-0">
                      {renderInlineMarkdown(paragraph.replace("## ", ""), `h-${index}`)}
                    </h2>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-4 text-muted-foreground">
                      {renderInlineMarkdown(paragraph.replace("- ", ""), `li-${index}`)}
                    </li>
                  )
                }
                if (paragraph.trim() === "") {
                  return null
                }
                return (
                  <p key={index} className="mb-3 leading-relaxed text-muted-foreground">
                    {renderInlineMarkdown(paragraph, `p-${index}`)}
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
