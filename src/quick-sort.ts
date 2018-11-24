const swap = (arr, i, j) => {
  arr[i] ^= arr[j]
  arr[j] ^= arr[i]
  arr[i] ^= arr[j]
}

function inPlaceQuickSort<T>(arr: T[], l: number, r: number) {
  if (l >= r) {
    return
  }

  let pivot = arr[l]
  let i = l
  let j = r
  while (true) {
    while (arr[i] < pivot) {
      i++
    }

    while (arr[j] > pivot) {
      j--
    }

    if (i >= j) {
      break
    }

    swap(arr, i, j)
    i++
    j--
  }
  inPlaceQuickSort(arr, l, j)
  inPlaceQuickSort(arr, j + 1, r)
}

export default function quickSort<T>(arr: T[]) {
  const copy = [...arr]
  inPlaceQuickSort(copy, 0, copy.length - 1)
  return copy
}
