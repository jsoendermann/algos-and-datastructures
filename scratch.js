const Graph = require('./dist/graph').UndirectedAdjacencyMatrixGraph

const g = new Graph()

g.addVertex()
g.addVertex()
g.addVertex()
g.addVertex()
g.addVertex()
g.addVertex()

g.addEdge(0, 1)
g.addEdge(0, 4)
g.addEdge(0, 5)
g.addEdge(1, 2)
g.addEdge(1, 4)
g.addEdge(2, 3)
g.addEdge(3, 4)

// const parent = g.depthFirstSearch(0, { processVertexEarly: console.log })

// console.log(parent)

function searchRoute(g, start, end) {
  const seenNodes = {}
  let didFindRoute = false
  const dfs = u => {
    seenNodes[u] = true
    for (const { neighbour } of g.getNeighbours(u)) {
      if (neighbour === end) {
        didFindRoute = true
        return
      }
      if (!seenNodes[neighbour]) {
        seenNodes[neighbour] = true
        dfs(neighbour)
      }
    }
  }
  dfs(start)
  return didFindRoute
}

console.log(searchRoute(g, 0, 3))

console.log(g.toString())
