import binarySearch from './binary-search'

describe('Binary search', () => {
  test('returns -1 when element does not exist', () => {
    const arr = [1, 2, 3]
    expect(binarySearch(arr, 4)).toBe(-1)
  })

  test('handles empty arrays', () => {
    const arr = []
    expect(binarySearch(arr, 1)).toBe(-1)
  })

  test('finds elements', () => {
    const arr = [1, 2, 3]
    expect(binarySearch(arr, 1)).toBe(0)
  })

  test('searches more arrays', () => {
    const arr = [...Array(10).keys()]
    expect(binarySearch(arr, 0)).toBe(0)
    expect(binarySearch(arr, 9)).toBe(arr.length - 1)
    expect(binarySearch(arr, -1)).toBe(-1)
    expect(binarySearch(arr, 4)).toBe(4)
  })
})
