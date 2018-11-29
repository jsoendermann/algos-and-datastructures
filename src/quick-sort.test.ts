import quickSort from './quick-sort'

describe('quick sort', () => {
  test('handles empty arrays', () => {
    const res = quickSort([])
    expect(res).toEqual([])
  })

  test('handles sorted arrays', () => {
    const res = quickSort([1, 2, 3])
    expect(res).toEqual([1, 2, 3])
  })

  test('sorts arrays', () => {
    const res = quickSort([4, 1, 3, 2])
    expect(res).toEqual([1, 2, 3, 4])
  })

  test('sorts arrays of all the same numbers', () => {
    const arr = [1, 1, 1, 1, 1, 1, 1]
    const res = quickSort(arr)
    expect(res).toEqual(arr)
  })
})
