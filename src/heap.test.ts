import MaxHeap from './heap'

describe('Heap', () => {
  test('grows and extracts maximum values', () => {
    const heap = new MaxHeap<number>()
    heap.insert(0)
    heap.insert(1)
    heap.insert(3)
    heap.insert(0)
    heap.insert(1)
    heap.insert(10)
    expect(heap.extractMax()).toEqual(10)
    expect(heap.extractMax()).toEqual(3)
  })
})
