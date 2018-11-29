import mergeSort from './merge-sort'

describe('merge sort', () => {
  test('handles empty arrays', () => {
    const arr = []
    const res = mergeSort(arr)
    expect(res).toEqual([])
  })

  test('sorts properly', () => {
    const arr = [3, 1, 4, 7, 2, 6, 8, 2, 1, 5, 3, 2, 7, 8, 3, 7]
    const res = mergeSort(arr)
    expect(res).toEqual(arr.sort((a, b) => a - b))
  })

  test('sorts arrays of all the same numbers', () => {
    const arr = [1, 1, 1, 1, 1, 1, 1]
    const res = mergeSort(arr)
    expect(res).toEqual(arr)
  })
})
