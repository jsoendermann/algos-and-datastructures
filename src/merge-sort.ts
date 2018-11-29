function merge<T>(arr: T[], l1: number, r1: number, l2: number, r2: number) {
  const scratch = []
  let l = l1
  let r = l2

  while (true) {
    if (arr[l] < arr[r]) {
      scratch.push(arr[l])
      l++
    } else {
      scratch.push(arr[r])
      r++
    }

    if (l > r1) {
      scratch.push(...arr.slice(r, r2 + 1))
      break
    }
    if (r > r2) {
      scratch.push(...arr.slice(l, r1 + 1))
      break
    }
  }

  arr.splice(l1, r2 - l1 + 1, ...scratch)
}

function inPlaceMergeSort<T>(arr: T[], l: number, r: number) {
  if (l >= r) {
    return
  }
  const mid = l + Math.floor((r - l) / 2)
  const l1 = l
  const r1 = mid
  const l2 = mid + 1
  const r2 = r
  inPlaceMergeSort(arr, l1, r1)
  inPlaceMergeSort(arr, l2, r2)
  merge(arr, l1, r1, l2, r2)
}

export default function mergeSort<T>(arr: T[]) {
  const copy = [...arr]
  inPlaceMergeSort(copy, 0, copy.length - 1)
  return copy
}
