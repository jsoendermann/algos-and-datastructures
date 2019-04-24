export interface SearchParams {
  processVertexEarly?: (v: number) => void
  processEdge?: (i: number, j: number, weight: number | null) => void
  processVertexLate?: (v: number) => void
}

abstract class Graph {
  public abstract addVertex(): number
  public abstract addEdge(i: number, j: number, weight?: number)
  public abstract vertexCount(): number
  public abstract getNeighbours(
    vertex: number,
  ): IterableIterator<{ edgeWeight: number; neighbour: number }>

  public breadthFirstSearch(
    start: number,
    { processVertexEarly, processEdge, processVertexLate }: SearchParams,
  ): number[] {
    if (start > this.vertexCount() - 1) {
      throw new Error(`Start vertex ${start} does not exist in graph`)
    }

    const parents = new Array(this.vertexCount()).fill(null)
    const state = new Array(this.vertexCount()).fill('UNDISCOVERED')
    state[start] = 'DISCOVERED'

    const queue = [start]

    while (queue.length > 0) {
      const u = queue.shift()
      processVertexEarly && processVertexEarly(u)

      for (const { edgeWeight, neighbour } of this.getNeighbours(u)) {
        processEdge && processEdge(u, neighbour, edgeWeight)
        if (state[neighbour] === 'UNDISCOVERED') {
          state[neighbour] = 'DISCOVERED'
          parents[neighbour] = u
          queue.push(neighbour)
        }
      }
      state[u] = 'PROCESSED'
      processVertexLate && processVertexLate(u)
    }

    return parents
  }

  public depthFirstSearch(
    start: number,
    { processVertexEarly, processEdge, processVertexLate }: SearchParams,
  ) {
    if (start > this.vertexCount() - 1) {
      throw new Error(`Start vertex ${start} does not exist in graph`)
    }

    const parents = new Array(this.vertexCount()).fill(null)
    const state = new Array(this.vertexCount()).fill('UNDISCOVERED')

    const dfs = (u: number) => {
      state[u] = 'DISCOVERED'
      processVertexEarly && processVertexEarly(u)

      for (const { edgeWeight, neighbour } of this.getNeighbours(u)) {
        processEdge && processEdge(u, neighbour, edgeWeight)
        if (state[neighbour] === 'UNDISCOVERED') {
          parents[neighbour] = u
          state[neighbour] = 'DISCOVERED'
          dfs(neighbour)
        }
      }
      state[u] = 'PROCESSED'
      processVertexLate && processVertexLate(u)
    }

    dfs(start)
    return parents
  }
}

interface Edgenode {
  y: number
  weight: number
  next: Edgenode | null
}

export class DirectedAdjacencyListGraph extends Graph {
  private edges: Array<Edgenode | null> = []

  vertexCount() {
    return this.edges.length
  }

  addVertex(): number {
    this.edges.push(null)
    return this.vertexCount() - 1
  }

  addEdge(i: number, j: number, weight?: number) {
    if (i > this.edges.length - 1) {
      throw new Error(`Origin vertix ${i} does not exist in graph`)
    }
    if (j > this.edges.length - 1) {
      throw new Error(`Destination vertix ${j} does not exist in graph`)
    }

    const newNode: Edgenode = {
      y: j,
      weight: weight === undefined ? 1 : weight,
      next: this.edges[i],
    }
    this.edges[i] = newNode
  }

  *getNeighbours(vertex: number) {
    let head = this.edges[vertex]
    while (head) {
      yield { edgeWeight: head.weight, neighbour: head.y }
      head = head.next
    }
  }

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
