const {
  iterativePreorder,
  iterativeInorder,
  iterativePostorder
} = require('./dist/binary-tree')

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: { val: 4, left: null, right: null }
  },
  right: {
    val: 5,
    left: null,
    right: { val: 6, left: { val: 7, left: null, right: null }, right: null }
  }
}

console.log(iterativePostorder(root))

// const RedBlackTree = require('./dist/binary-search-tree').RedBlackTree
// const Node = require('./dist/binary-search-tree').Node

// const root = new Node(-1)
// const t = new Node(0)
// const newRoot = new Node(1)
// const subtree = new Node(2)
// root.left = t
// t.left = newRoot
// newRoot.right = subtree

// console.log(root.toString())

// t.rotateRight()

// console.log(root.toString())

// const Mean = require('./dist/mean').default

// const m = new Mean()
// m.addElements([1, 2, 3])
// console.log(m.getMean())
// m.addElements([4])
// console.log(m.getMean())

// const Trie = require('./dist/trie').Trie

// const t = new Trie(['arst', 'ars', 'b', 'zxv', ''])
// // console.log(t.toString())

// // console.log(t.contains(''))
// // console.log(t.contains('ar'))
// // console.log(t.contains('arst'))
// // console.log(t.contains('brs'))

// console.log(t.contains('zx'))
// console.log(t.containsPrefix('zx'))

// const Graph = require('./dist/graph').DirectedAdjacencyListGraph

// const g = new Graph()

// g.addVertex()
// g.addVertex()
// g.addVertex()
// g.addVertex()
// g.addVertex()
// g.addVertex()
// g.addVertex()

// g.addEdge(0, 1)
// g.addEdge(0, 2)
// g.addEdge(1, 2)
// g.addEdge(1, 3)
// g.addEdge(2, 4)
// g.addEdge(2, 5)
// g.addEdge(4, 3)
// g.addEdge(5, 4)
// g.addEdge(6, 0)
// g.addEdge(6, 5)

// // const parent = g.depthFirstSearch(0, { processVertexEarly: console.log })

// // console.log(parent)

// // function searchRoute(g, start, end) {
// //   const seenNodes = {}
// //   let didFindRoute = false
// //   const dfs = u => {
// //     seenNodes[u] = true
// //     for (const { neighbour } of g.getNeighbours(u)) {
// //       if (neighbour === end) {
// //         didFindRoute = true
// //         return
// //       }
// //       if (!seenNodes[neighbour]) {
// //         seenNodes[neighbour] = true
// //         dfs(neighbour)
// //       }
// //     }
// //   }
// //   dfs(start)
// //   return didFindRoute
// // }

// // console.log(searchRoute(g, 0, 3))

// let start

// for (let i = 0; i < g.vertexCount(); i++) {}

// g.depthFirstSearch(0, { processVertexLate: console.log })

// console.log(g.toString())
