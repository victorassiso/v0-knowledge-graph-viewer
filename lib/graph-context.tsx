"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type GraphMode = "clusters" | "cluster-detail" | "expanded"

interface GraphState {
  mode: GraphMode
  selectedClusterId: string | null
}

interface GraphContextType {
  state: GraphState
  setGraphMode: (mode: "clusters" | "expanded") => void
  enterClusterDetail: (clusterId: string) => void
  goBack: () => void
}

const GraphContext = createContext<GraphContextType | null>(null)

export function GraphProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GraphState>({
    mode: "clusters",
    selectedClusterId: null,
  })

  const setGraphMode = useCallback((mode: "clusters" | "expanded") => {
    setState({ mode, selectedClusterId: null })
  }, [])

  const enterClusterDetail = useCallback((clusterId: string) => {
    setState({ mode: "cluster-detail", selectedClusterId: clusterId })
  }, [])

  const goBack = useCallback(() => {
    setState({ mode: "clusters", selectedClusterId: null })
  }, [])

  return (
    <GraphContext.Provider value={{ state, setGraphMode, enterClusterDetail, goBack }}>
      {children}
    </GraphContext.Provider>
  )
}

export function useGraphContext() {
  const context = useContext(GraphContext)
  if (!context) {
    throw new Error("useGraphContext must be used within a GraphProvider")
  }
  return context
}
