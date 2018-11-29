export default class MaxHeap<T> {
  private arr: T[] = []

  constructor() {}

  insert(newElement: T) {
    let index = this.arr.push(newElement) - 1

    while (true) {
      if (index === 0) {
        return
      }
      const p = this.parentIndex(index)
      if (this.arr[p] < this.arr[index]) {
        this.swap(p, index)
        index = p
      } else {
        return
      }
    }
  }

  extractMax(): T | null {
    if (this.arr.length === 0) {
      return null
    }

    const max = this.arr[0]
    this.arr[0] = this.arr.pop()

    let index = 0
    while (true) {
      const l = this.leftChildIndex(index)
      const r = this.rightChildIndex(index)
      let largest
      if (l < this.arr.length && this.arr[l] > this.arr[index]) {
        largest = l
      } else {
        largest = index
      }
      if (r < this.arr.length && this.arr[r] > this.arr[largest]) {
        largest = r
      }
      if (largest !== index) {
        this.swap(largest, index)
      } else {
        break
      }
    }

    return max
  }

  private swap(i: number, j: number) {
    ;[this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
  }

  private leftChildIndex(index: number): number {
    return 2 * index + 1
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  toArray(): T[] {
    return [...this.arr]
  }
}
