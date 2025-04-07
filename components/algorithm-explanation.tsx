"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, GitBranchPlus, Workflow, Dna } from "lucide-react"
import { motion } from "framer-motion"

export default function AlgorithmExplanation() {
  const [activeTab, setActiveTab] = useState("astar")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
        Understanding AI Search Algorithms
      </h2>
      <p className="text-muted-foreground">
        Search algorithms are fundamental to artificial intelligence. They help computers find solutions to problems by
        exploring possible paths to a goal.
      </p>

      <Tabs defaultValue="astar" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 bg-background/80 backdrop-blur-sm">
          <TabsTrigger value="astar">A* Search</TabsTrigger>
          <TabsTrigger value="bfs">BFS</TabsTrigger>
          <TabsTrigger value="dfs">DFS</TabsTrigger>
          <TabsTrigger value="genetic">Genetic</TabsTrigger>
        </TabsList>

        <TabsContent value="astar">
          <Card className="border-blue-200 dark:border-blue-900">
            <CardHeader className="flex flex-row items-center gap-2 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-950/50 dark:to-sky-950/50 rounded-t-lg">
              <Search className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              <div>
                <CardTitle>A* Search Algorithm</CardTitle>
                <CardDescription>An informed search algorithm that uses a heuristic</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.p variants={item}>
                  A* (pronounced "A-star") is one of the most popular pathfinding algorithms. It combines the advantages
                  of both Dijkstra's algorithm (which guarantees the shortest path) and Greedy Best-First-Search (which
                  uses heuristics to speed up the search).
                </motion.p>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  How A* Works:
                </motion.h3>
                <motion.ol variants={item} className="list-decimal pl-5 space-y-2">
                  <li>A* uses a priority queue to select the most promising node to explore next.</li>
                  <li>
                    For each node, A* calculates two costs:
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        <strong>g(n)</strong>: The cost to reach this node from the start
                      </li>
                      <li>
                        <strong>h(n)</strong>: The estimated cost to reach the goal from this node (the heuristic)
                      </li>
                    </ul>
                  </li>
                  <li>A* selects nodes based on f(n) = g(n) + h(n), prioritizing nodes with the lowest total cost.</li>
                  <li>The algorithm continues until it reaches the goal or exhausts all possibilities.</li>
                </motion.ol>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  Key Properties:
                </motion.h3>
                <motion.ul variants={item} className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Complete:</strong> A* will always find a solution if one exists.
                  </li>
                  <li>
                    <strong>Optimal:</strong> A* finds the shortest path if the heuristic is admissible (never
                    overestimates).
                  </li>
                  <li>
                    <strong>Efficient:</strong> A* typically explores fewer nodes than uninformed search algorithms.
                  </li>
                </motion.ul>

                <motion.div
                  variants={item}
                  className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-md mt-4 border border-blue-100 dark:border-blue-900"
                >
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400">Real-world Applications:</h4>
                  <ul className="list-disc pl-5 mt-2 text-blue-700 dark:text-blue-400">
                    <li>GPS navigation systems</li>
                    <li>Video game pathfinding</li>
                    <li>Robotics and autonomous vehicles</li>
                    <li>Network routing algorithms</li>
                  </ul>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bfs">
          <Card className="border-purple-200 dark:border-purple-900">
            <CardHeader className="flex flex-row items-center gap-2 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50 rounded-t-lg">
              <Workflow className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              <div>
                <CardTitle>Breadth-First Search (BFS)</CardTitle>
                <CardDescription>
                  An uninformed search algorithm that explores all neighbors at the current depth
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.p variants={item}>
                  Breadth-First Search (BFS) is one of the simplest search algorithms. It explores all neighbors at the
                  current depth before moving to nodes at the next depth level.
                </motion.p>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  How BFS Works:
                </motion.h3>
                <motion.ol variants={item} className="list-decimal pl-5 space-y-2">
                  <li>BFS uses a queue data structure to keep track of nodes to visit.</li>
                  <li>It starts at the root node and explores all neighbors at the current depth.</li>
                  <li>Then it moves to the next depth level and repeats the process.</li>
                  <li>BFS continues until it finds the goal or explores the entire graph.</li>
                </motion.ol>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  Key Properties:
                </motion.h3>
                <motion.ul variants={item} className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Complete:</strong> BFS will always find a solution if one exists.
                  </li>
                  <li>
                    <strong>Optimal:</strong> BFS finds the shortest path in terms of the number of steps.
                  </li>
                  <li>
                    <strong>Space Complexity:</strong> BFS can require a lot of memory as it needs to store all nodes at
                    the current level.
                  </li>
                </motion.ul>

                <motion.div
                  variants={item}
                  className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-md mt-4 border border-purple-100 dark:border-purple-900"
                >
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400">Real-world Applications:</h4>
                  <ul className="list-disc pl-5 mt-2 text-purple-700 dark:text-purple-400">
                    <li>Finding shortest paths in unweighted graphs</li>
                    <li>Web crawlers</li>
                    <li>Social network analysis (finding degrees of separation)</li>
                    <li>Puzzle solving (like the 15-puzzle)</li>
                  </ul>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dfs">
          <Card className="border-green-200 dark:border-green-900">
            <CardHeader className="flex flex-row items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 rounded-t-lg">
              <GitBranchPlus className="h-6 w-6 text-green-500 dark:text-green-400" />
              <div>
                <CardTitle>Depth-First Search (DFS)</CardTitle>
                <CardDescription>
                  An uninformed search algorithm that explores as far as possible along each branch
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.p variants={item}>
                  Depth-First Search (DFS) is a search algorithm that explores as far as possible along each branch
                  before backtracking. It goes deep before it goes wide.
                </motion.p>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  How DFS Works:
                </motion.h3>
                <motion.ol variants={item} className="list-decimal pl-5 space-y-2">
                  <li>DFS uses a stack data structure (or recursion) to keep track of nodes to visit.</li>
                  <li>It starts at the root node and explores as far as possible along each branch.</li>
                  <li>When it reaches a dead end, it backtracks to the most recent node with unexplored neighbors.</li>
                  <li>DFS continues until it finds the goal or explores the entire graph.</li>
                </motion.ol>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  Key Properties:
                </motion.h3>
                <motion.ul variants={item} className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Complete:</strong> DFS will find a solution if one exists, but only if the search space is
                    finite.
                  </li>
                  <li>
                    <strong>Not Optimal:</strong> DFS does not guarantee the shortest path.
                  </li>
                  <li>
                    <strong>Space Efficiency:</strong> DFS requires less memory than BFS as it only needs to store the
                    path from the root to the current node.
                  </li>
                </motion.ul>

                <motion.div
                  variants={item}
                  className="bg-green-50 dark:bg-green-950/50 p-4 rounded-md mt-4 border border-green-100 dark:border-green-900"
                >
                  <h4 className="font-semibold text-green-700 dark:text-green-400">Real-world Applications:</h4>
                  <ul className="list-disc pl-5 mt-2 text-green-700 dark:text-green-400">
                    <li>Topological sorting</li>
                    <li>Finding connected components in a graph</li>
                    <li>Maze generation algorithms</li>
                    <li>Solving puzzles with many branching paths</li>
                  </ul>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="genetic">
          <Card className="border-amber-200 dark:border-amber-900">
            <CardHeader className="flex flex-row items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 rounded-t-lg">
              <Dna className="h-6 w-6 text-amber-500 dark:text-amber-400" />
              <div>
                <CardTitle>Genetic Algorithm</CardTitle>
                <CardDescription>An evolutionary algorithm inspired by natural selection</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.p variants={item}>
                  Genetic Algorithms (GAs) are search algorithms inspired by the process of natural selection. They
                  generate solutions to optimization problems using techniques inspired by natural evolution, such as
                  inheritance, mutation, selection, and crossover.
                </motion.p>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  How Genetic Algorithms Work:
                </motion.h3>
                <motion.ol variants={item} className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Initialization:</strong> Create an initial population of random solutions.
                  </li>
                  <li>
                    <strong>Evaluation:</strong> Calculate the fitness of each solution based on how well it solves the
                    problem.
                  </li>
                  <li>
                    <strong>Selection:</strong> Select the fittest individuals to reproduce.
                  </li>
                  <li>
                    <strong>Crossover:</strong> Create new solutions by combining parts of selected solutions.
                  </li>
                  <li>
                    <strong>Mutation:</strong> Randomly alter some solutions to maintain diversity.
                  </li>
                  <li>
                    <strong>Repeat:</strong> Continue this process for multiple generations until a satisfactory
                    solution is found.
                  </li>
                </motion.ol>

                <motion.h3 variants={item} className="text-lg font-semibold mt-4">
                  Key Properties:
                </motion.h3>
                <motion.ul variants={item} className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Parallel Search:</strong> GAs evaluate multiple solutions simultaneously.
                  </li>
                  <li>
                    <strong>Global Optimization:</strong> GAs can find good solutions to complex problems with many
                    local optima.
                  </li>
                  <li>
                    <strong>Adaptability:</strong> GAs can adapt to changing environments and problem conditions.
                  </li>
                  <li>
                    <strong>No Gradient Needed:</strong> GAs don't require derivative information, making them suitable
                    for discontinuous or noisy problems.
                  </li>
                </motion.ul>

                <motion.div
                  variants={item}
                  className="bg-amber-50 dark:bg-amber-950/50 p-4 rounded-md mt-4 border border-amber-100 dark:border-amber-900"
                >
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400">Real-world Applications:</h4>
                  <ul className="list-disc pl-5 mt-2 text-amber-700 dark:text-amber-400">
                    <li>Optimization problems (scheduling, routing, packing)</li>
                    <li>Machine learning and neural network training</li>
                    <li>Automated design (circuit design, architectural layouts)</li>
                    <li>Financial market prediction and portfolio optimization</li>
                    <li>Game AI and strategy development</li>
                  </ul>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

