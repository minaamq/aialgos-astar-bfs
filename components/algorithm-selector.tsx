"use client"
import { useAlgorithmStore } from "@/lib/store"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Search, GitBranchPlus, Workflow, Dna } from "lucide-react"
import { motion } from "framer-motion"

export default function AlgorithmSelector() {
  const { selectedAlgorithm, setSelectedAlgorithm, isRunning } = useAlgorithmStore()

  const algorithms = [
    {
      id: "astar",
      name: "A* Search",
      icon: <Search className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400" />,
      description: "Finds the shortest path using a heuristic",
      color: "from-blue-500 to-sky-400 dark:from-blue-400 dark:to-sky-300",
    },
    {
      id: "bfs",
      name: "Breadth-First Search",
      icon: <Workflow className="h-5 w-5 mr-2 text-purple-500 dark:text-purple-400" />,
      description: "Explores all neighbors at the current depth",
      color: "from-purple-500 to-violet-400 dark:from-purple-400 dark:to-violet-300",
    },
    {
      id: "dfs",
      name: "Depth-First Search",
      icon: <GitBranchPlus className="h-5 w-5 mr-2 text-green-500 dark:text-green-400" />,
      description: "Explores as far as possible along each branch",
      color: "from-green-500 to-emerald-400 dark:from-green-400 dark:to-emerald-300",
    },
    {
      id: "genetic",
      name: "Genetic Algorithm",
      icon: <Dna className="h-5 w-5 mr-2 text-amber-500 dark:text-amber-400" />,
      description: "Evolves solutions through generations",
      color: "from-amber-500 to-orange-400 dark:from-amber-400 dark:to-orange-300",
    },
  ]

  const handleAlgorithmChange = (value: string) => {
    setSelectedAlgorithm(value as "astar" | "bfs" | "dfs" | "genetic")
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Algorithm</h2>

      <RadioGroup
        value={selectedAlgorithm}
        onValueChange={handleAlgorithmChange}
        className="space-y-3"
        disabled={isRunning}
      >
        {algorithms.map((algorithm) => (
          <motion.div
            key={algorithm.id}
            className={`flex items-start space-x-2 p-2 rounded-md ${
              selectedAlgorithm === algorithm.id
                ? `bg-gradient-to-r ${algorithm.color} bg-opacity-10 dark:bg-opacity-5`
                : "hover:bg-muted/50"
            } transition-colors duration-200`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <RadioGroupItem value={algorithm.id} id={algorithm.id} className="mt-1" disabled={isRunning} />
            <div className="grid gap-1.5">
              <Label htmlFor={algorithm.id} className="flex items-center cursor-pointer font-medium">
                {algorithm.icon}
                {algorithm.name}
              </Label>
              <p className="text-sm text-muted-foreground">{algorithm.description}</p>
            </div>
          </motion.div>
        ))}
      </RadioGroup>
    </div>
  )
}

