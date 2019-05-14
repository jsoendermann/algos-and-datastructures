interface Node {
  children: { [char: string]: Node }
  isLeaf: boolean
}

export class Trie {
  private root: Node = { children: {}, isLeaf: false }

  constructor(words: string[]) {
    for (const word of words) {
      this.insertWord(word)
    }
  }

  insertWord(word) {
    let currentNode = this.root

    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = { children: {}, isLeaf: false }
      }
      currentNode = currentNode.children[char]
    }

    currentNode.isLeaf = true
  }

  private findNodeForWord(word: string): Node | null {
    let currentNode = this.root

    for (const char of word) {
      if (!currentNode.children[char]) {
        return null
      }
      currentNode = currentNode.children[char]
    }

    return currentNode
  }

  contains(word: string) {
    const node = this.findNodeForWord(word)
    if (!node) {
      return false
    }
    return node.isLeaf
  }

  containsPrefix(word: string) {
    const node = this.findNodeForWord(word)
    return !!node
  }

  toString() {
    return JSON.stringify(this.root, null, 2)
  }
}
