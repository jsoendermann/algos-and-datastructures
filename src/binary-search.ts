export default function binarySearch(array: number[], element: number): number {
  let l = 0
  let r = array.length - 1

  while (l <= r) {
    let midIndex = Math.floor(l + (r - l) / 2)
    // console.log(`${l} ${midIndex} ${r}`)
    const midElement = array[midIndex]

    if (midElement === element) {
      return midIndex
    } else if (midElement < element) {
      l = midIndex + 1
    } else {
      r = midIndex - 1
    }
  }
  return -1
}
