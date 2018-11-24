interface ListNode<T> {
  val: T
  next: ListNode<T> | null
}

export default class LinkedList<T> {
  private head: ListNode<T> | null = null

  constructor(vals?: T[]) {
    if (vals) {
      for (const val of vals) {
        this.push(val)
      }
    }
  }

  toString() {
    return '[' + this.toArray().join(', ') + ']'
  }

  reverse() {
    if (this.length === 0) {
      return
    }
    let newHead = { val: this.head.val, next: null }
    let p = this.head.next
    while (p) {
      newHead = { val: p.val, next: newHead }
      p = p.next
    }
    this.head = newHead
  }

  toArray() {
    if (!this.head) {
      return []
    }
    const arr = []
    let p = this.head
    while (p) {
      arr.push(p.val)
      p = p.next
    }
    return arr
  }

  push(val: T) {
    if (!this.head) {
      this.head = { val, next: null }
      return
    }
    let p = this.head
    while (p.next !== null) {
      p = p.next
    }
    p.next = { val, next: null }
  }

  pushArray(vals: T[]) {
    if (vals.length === 0) {
      return
    }
    let arrIndex = 0
    let lastElement
    if (!this.head) {
      this.head = { val: vals[arrIndex], next: null }
      arrIndex++
      lastElement = this.head
    } else {
      lastElement = this.head
      while (lastElement.next) {
        lastElement = lastElement.next
      }
    }
    while (arrIndex < vals.length) {
      lastElement.next = { val: vals[arrIndex], next: null }
      lastElement = lastElement.next
      arrIndex++
    }
  }

  pushList(otherList: LinkedList<T>) {
    if (!this.head) {
      this.head = otherList.head
      return
    }
    let lastElement = this.head
    while (lastElement.next) {
      lastElement = lastElement.next
    }
    lastElement.next = otherList.head
  }

  get(i: number) {
    if (!this.head) {
      throw new Error('List is empty')
    }
    let p = this.head
    while (i > 0) {
      p = p.next
      i--
    }
    return p.val
  }

  getLast() {
    if (!this.head) {
      throw new Error('List is empty')
    }
    let lastElement = this.head
    while (lastElement.next) {
      lastElement = lastElement.next
    }
    return lastElement.val
  }

  get length() {
    if (!this.head) {
      return 0
    }
    let l = 1
    let p = this.head
    while (p.next !== null) {
      p = p.next
      l++
    }
    return l
  }

  removeAt(i: number) {
    if (!this.head) {
      throw new Error('List is empty')
    }
    if (i === 0) {
      this.head = this.head.next
      return
    }
    let p = this.head
    while (i > 1) {
      p = p.next
      i--
    }
    p.next = p.next.next
  }
}
