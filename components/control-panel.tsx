"use client"

import { useAlgorithmStore } from "@/lib/store"
import { Slider } from "@/components/ui/slider"
import { Clock, Info } from "lucide-react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ControlPanel() {
  const { isRunning, speed, setSpeed } = useAlgorithmStore()

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Controls</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Animation Speed</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-[200px] text-xs">
                  Adjust how fast the algorithm visualization runs. Slower speeds make it easier to follow the
                  algorithm's steps.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="px-2">
          <Slider
            value={[1000 - speed]}
            max={950}
            min={50}
            step={50}
            onValueChange={(value) => setSpeed(1000 - value[0])}
            disabled={isRunning}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>
      </div>

      <motion.div
        className="pt-4 border-t border-border rounded-md p-3 bg-muted/50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Instructions:</span> Click on the grid to add or remove walls.
          Use the buttons above the grid to set start and end points.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Press <span className="font-medium text-foreground">Run</span> to see how the selected algorithm finds a path
          through the maze.
        </p>
      </motion.div>
    </div>
  )
}

