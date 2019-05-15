export default class Mean {
  private mean: number = NaN
  private elementCount = 0

  addElements(elements: number[]) {
    if (elements.length === 0) {
      return
    }

    const sum = elements.reduce((a, b) => a + b, 0)

    if (Number.isNaN(this.mean)) {
      this.mean = sum / elements.length
    } else {
      this.mean =
        (this.mean * this.elementCount + sum) /
        (this.elementCount + elements.length)
    }
    this.elementCount += elements.length
  }

  getMean() {
    return this.mean
  }
}
