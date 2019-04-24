const Graph = require('./dist/graph').UndirectedAdjacencyListGraph

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

const parent = g.depthFirstSearch(0, { processVertexEarly: console.log })

console.log(parent)

console.log(g.toString())
