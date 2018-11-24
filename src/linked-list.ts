interface ListNode<T> {
  val: T
  next: ListNode<T> | null
}

export default class LinkedList<T> {
  private head: ListNode<T> | null = null

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
}
