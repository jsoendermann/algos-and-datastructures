import LinkedList from './linked-list'

describe('LinkedList', () => {
  test('push', () => {
    const list = new LinkedList()
    list.push(42)
    expect(list.length).toEqual(1)
  })

  test('initialize with values', () => {
    const list = new LinkedList([1, 2, 3])
    expect(list.length).toEqual(3)
  })

  test('access elements', () => {
    const list = new LinkedList([1, 2, 3])
    expect(list.get(0)).toEqual(1)
    expect(list.get(1)).toEqual(2)
  })

  test('remove', () => {
    const list = new LinkedList([1, 2, 3, 4])
    list.removeAt(0)
    expect(list.get(0)).toEqual(2)
    list.removeAt(1)
    expect(list.get(1)).toEqual(4)
  })

  test('reverse', () => {
    const list = new LinkedList([1, 2, 3])
    list.reverse()
    expect(list.toArray()).toEqual([3, 2, 1])
  })

  test('reverse empty list', () => {
    const list = new LinkedList()
    list.reverse()
    expect(list.toArray()).toEqual([])
  })

  test('reverse list with one element', () => {
    const list = new LinkedList([42])
    list.reverse()
    expect(list.toArray()).toEqual([42])
  })

  test('push array', () => {
    const list = new LinkedList([1, 2])
    list.pushArray([3, 4])
    expect(list.toArray()).toEqual([1, 2, 3, 4])
  })

  test('push list', () => {
    const list1 = new LinkedList([1, 2])
    const list2 = new LinkedList([3, 4])
    list1.pushList(list2)
    expect(list1.toArray()).toEqual([1, 2, 3, 4])
  })

  test('get last element', () => {
    const list = new LinkedList([1, 2, 3])
    expect(list.getLast()).toEqual(3)
  })
})
