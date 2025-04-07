import { Suspense } from "react"
import AlgorithmSelector from "@/components/algorithm-selector"
// import PuzzleGrid from "@/components/puzzle-grid"
import AlgorithmExplanation from "@/components/algorithm-explanation"
import ControlPanel from "@/components/control-panel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
              AI Algorithm Puzzle Game
            </h1>
            <p className="text-muted-foreground mt-2">
              Learn how different AI search algorithms work by solving maze puzzles
            </p>
          </div>
          <ThemeToggle className="mt-4 md:mt-0" />
        </header>

        <Tabs defaultValue="play" className="w-full">
          <TabsList className="mb-6 bg-background/80 backdrop-blur-sm">
            <TabsTrigger value="play">Play Game</TabsTrigger>
            <TabsTrigger value="learn">Learn Algorithms</TabsTrigger>
          </TabsList>

          <TabsContent value="play" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-card rounded-lg shadow-lg p-4 border border-border">
                <Suspense
                  fallback={
                    <div className="animate-pulse h-96 bg-muted rounded-md flex items-center justify-center">
                      Loading puzzle grid...
                    </div>
                  }
                >
                  {/* <PuzzleGrid /> */}
                </Suspense>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-lg shadow-lg p-4 border border-border">
                  <AlgorithmSelector />
                </div>

                <div className="bg-card rounded-lg shadow-lg p-4 border border-border">
                  <ControlPanel />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learn">
            <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
              <AlgorithmExplanation />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

