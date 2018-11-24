import DynamicUint8Array from './dynamic-array'

describe('DynamicArray', () => {
  test('grows', () => {
    const arr = new DynamicUint8Array(1)
    arr.set(15, 1)
    expect(arr.length).toEqual(16)
  })

  test('allows out of bounds access', () => {
    const arr = new DynamicUint8Array(1)
    expect(arr.get(15)).toEqual(0)
  })
})
