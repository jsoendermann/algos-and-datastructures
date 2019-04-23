interface Edgenode {
  y: number
  weight: number | null
  next: Edgenode | null
}

interface Graph {
  addVertex(): number
  addEdge(i: number, j: number)
}

export interface SearchParams {
  processVertexEarly?: (v: number) => void
  processEdge?: (i: number, j: number, weight: number | null) => void
  processVertexLate?: (v: number) => void
}

export class DirectedAdjacencyListGraph implements Graph {
  private edges: Array<Edgenode | null> = []

  addVertex(): number {
    this.edges.push(null)
    return this.edges.length - 1
  }

  addEdge(i: number, j: number) {
    if (i > this.edges.length - 1) {
      throw new Error(`Origin vertix ${i} does not exist in graph`)
    }
    if (j > this.edges.length - 1) {
      throw new Error(`Destination vertix ${j} does not exist in graph`)
    }

    const newNode: Edgenode = {
      y: j,
      weight: null,
      next: this.edges[i],
    }
    this.edges[i] = newNode
  }

  breadthFirstSearch(
    start: number,
    { processVertexEarly, processEdge, processVertexLate }: SearchParams,
  ): number[] {
    if (start > this.edges.length - 1) {
      throw new Error(`Start vertix ${start} does not exist in graph`)
    }

    const parent = new Array(this.edges.length).fill(null)
    const state = new Array(this.edges.length).fill('UNDISCOVERED')
    state[start] = 'DISCOVERED'

    const queue = [start]

    while (queue.length > 0) {
      const u = queue.shift()
      processVertexEarly && processVertexEarly(u)
      let head = this.edges[u]
      while (head) {
        processEdge && processEdge(u, head.y, head.weight)
        if (state[head.y] === 'UNDISCOVERED') {
          state[head.y] = 'DISCOVERED'
          parent[head.y] = u
          queue.push(head.y)
        }
        head = head.next
      }
      state[u] = 'PROCESSED'
      processVertexLate && processVertexLate(u)
    }

    return parent
  }

  depthFirstSearch(
    start: number,
    { processVertexEarly, processEdge, processVertexLate }: SearchParams,
  ) {}

  toString() {
    if (this.edges.length === 0) {
      return '<empty graph>'
    }
    let ret = ''
    for (let i = 0; i < this.edges.length; i++) {
      ret += i + ': '
      let adjacentEdges = []
      let head = this.edges[i]
      while (head) {
        adjacentEdges.push(head.y)
        head = head.next
      }
      ret += adjacentEdges.join(', ')
      ret += '\n'
    }
    return ret
  }
}

export class UndirectedAdjacencyListGraph extends DirectedAdjacencyListGraph {
  addEdge(i: number, j: number) {
    super.addEdge(i, j)
    super.addEdge(j, i)
  }
}
