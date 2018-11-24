export default class DynamicUint8Array {
  private array: Uint8Array

  constructor(length: number) {
    this.array = new Uint8Array(length)
  }

  private growArray() {
    const newArray = new Uint8Array(this.array.length * 2)
    for (let i = 0; i < this.array.length; i++) {
      newArray[i] = this.array[i]
    }
    this.array = newArray
  }

  get(index: number) {
    if (index >= this.array.length) {
      return 0
    }
    return this.array[index]
  }

  set(index: number, value: number) {
    while (index >= this.array.length) {
      this.growArray()
    }

    this.array[index] = value
  }

  get length() {
    return this.array.length
  }
}
