import { create } from "zustand"
import { persist } from "zustand/middleware"

type AlgorithmType = "astar" | "bfs" | "dfs" | "genetic"

interface AlgorithmState {
  selectedAlgorithm: AlgorithmType
  setSelectedAlgorithm: (algorithm: AlgorithmType) => void
  isRunning: boolean
  setIsRunning: (isRunning: boolean) => void
  speed: number
  setSpeed: (speed: number) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  algorithmSteps: any[]
  setAlgorithmSteps: (steps: any[]) => void
  grid: string[][]
  setGrid: (grid: string[][]) => void
  startPos: [number, number] | null
  setStartPos: (pos: [number, number] | null) => void
  endPos: [number, number] | null
  setEndPos: (pos: [number, number] | null) => void
}

export const useAlgorithmStore = create<AlgorithmState>()(
  persist(
    (set) => ({
      selectedAlgorithm: "astar",
      setSelectedAlgorithm: (algorithm) => set({ selectedAlgorithm: algorithm }),
      isRunning: false,
      setIsRunning: (isRunning) => set({ isRunning }),
      speed: 500,
      setSpeed: (speed) => set({ speed }),
      currentStep: 0,
      setCurrentStep: (step) => set({ currentStep: step }),
      algorithmSteps: [],
      setAlgorithmSteps: (steps) => set({ algorithmSteps: steps }),
      grid: [],
      setGrid: (grid) => set({ grid }),
      startPos: null,
      setStartPos: (pos) => set({ startPos: pos }),
      endPos: null,
      setEndPos: (pos) => set({ endPos: pos }),
    }),
    {
      name: "algorithm-store",
      skipHydration: true,
    },
  ),
)

