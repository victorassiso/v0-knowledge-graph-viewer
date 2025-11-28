"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface EdgePopoverData {
  sourceTitle: string
  targetTitle: string
  description: string
  similarities: string[]
  differences: string[]
}

interface EdgePopoverProps {
  data: EdgePopoverData | null
  position: { x: number; y: number } | null
  visible: boolean
}

export function EdgePopover({ data, position, visible }: EdgePopoverProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (visible) {
      setIsAnimating(true)
    } else {
      const timeout = setTimeout(() => setIsAnimating(false), 200)
      return () => clearTimeout(timeout)
    }
  }, [visible])

  if (!data || !position || !isAnimating) return null

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[100] max-w-sm rounded-lg border border-border bg-popover p-4 shadow-xl transition-all duration-200",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
      )}
      style={{
        left: position.x + 15,
        top: position.y - 10,
        transform: "translateY(-50%)",
      }}
    >
      <div className="space-y-3">
        {/* Title */}
        <div className="border-b border-border pb-2">
          <h4 className="text-sm font-semibold text-foreground">
            Relação: {data.sourceTitle} ↔ {data.targetTitle}
          </h4>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>

        {/* Similarities */}
        {data.similarities.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-emerald-500 mb-1.5 flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Similaridades
            </h5>
            <ul className="space-y-1">
              {data.similarities.map((item, i) => (
                <li
                  key={i}
                  className="text-xs text-muted-foreground pl-3.5 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Differences */}
        {data.differences.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-amber-500 mb-1.5 flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
              Diferenças
            </h5>
            <ul className="space-y-1">
              {data.differences.map((item, i) => (
                <li
                  key={i}
                  className="text-xs text-muted-foreground pl-3.5 relative before:content-['•'] before:absolute before:left-0 before:text-amber-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
