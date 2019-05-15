// WIP!

export interface BinarySearchTree {}

type Color = 'RED' | 'BLACK'

export class Node {
  private _left: Node | null = null
  private _right: Node | null = null
  private _parent: Node | null = null
  public color: Color = 'RED'

  constructor(public value: number) {}

  isLeaf() {
    return !this._left && !this._right
  }

  get left(): Node | null {
    return this._left
  }

  set left(newValue: Node | null) {
    this._left = newValue
    newValue && (newValue._parent = this)
  }

  get right(): Node | null {
    return this._right
  }

  set right(newValue: Node | null) {
    this._right = newValue
    newValue && (newValue._parent = this)
  }

  get parent(): Node | null {
    return this._parent
  }

  get grandparent(): Node | null {
    if (!this.parent) {
      return null
    }
    return this.parent.parent
  }

  get sibling(): Node | null {
    if (!this.parent) {
      return null
    }
    if (this.parent.left === this) {
      return this.parent.right
    }
    if (this.parent.right === this) {
      return this.parent.left
    }
    throw new Error('Something has gone wrong finding a sibling')
  }

  get uncle(): Node | null {
    if (!this.parent) {
      return null
    }
    return this.parent.sibling
  }

  public rotateLeft() {
    console.log('left')
    const newRoot = this.right
    if (!newRoot) {
      throw new Error('New root is null in left rotation')
    }

    const parent = this.parent
    this.right = newRoot.left
    newRoot.left = this

    if (!parent) {
      return
    } else if (parent.left === this) {
      parent.left = newRoot
    } else if (parent.right === this) {
      parent.right = newRoot
    } else {
      throw new Error(
        'Original root is neither left nor right child of its parent in left rotation'
      )
    }
  }

  public rotateRight() {
    console.log('rigth')
    const newRoot = this.left
    if (!newRoot) {
      throw new Error('New root is null in right rotation')
    }

    const parent = this._parent
    this.left = newRoot.right
    newRoot.right = this

    if (!parent) {
      return
    } else if (parent.left === this) {
      parent.left = newRoot
    } else if (parent.right === this) {
      parent.right = newRoot
    } else {
      throw new Error(
        'Original root is neither left nor right child of its parent in right rotation'
      )
    }
  }

  public toString(indentation = 0) {
    let ret =
      '|'.repeat(indentation) + this.value + ' (' + this.color + ')' + '\n'
    if (this.left) {
      ret += this.left.toString(indentation + 1) + '\n'
    } else {
      ret += '|'.repeat(indentation + 1) + '---\n'
    }
    if (this.right) {
      ret += this.right.toString(indentation + 1)
    } else {
      ret += '|'.repeat(indentation + 1) + '---'
    }
    return ret
  }
}

export class RedBlackTree implements BinarySearchTree {
  private root: Node | null = null

  insert(value: number) {
    if (!this.root) {
      const newNode = new Node(value)
      newNode.color = 'BLACK'
      this.root = newNode
      return
    }

    let n = this.root
    while (!n.isLeaf()) {
      if (n.value < value) {
        n = n.right
      } else {
        n = n.left
      }
    }
    const newNode = new Node(value)
    if (n.value < value) {
      n.right = newNode
    } else {
      n.left = newNode
    }

    this.insertRepair(newNode)

    // this.root = newNode
    // while (this.root.parent) {
    //   console.log(this.root)
    //   console.log('whi')
    //   this.root = this.root.parent
    // }
  }

  private insertRepair(node: Node) {
    console.log('insertRepair')
    if (node.parent.color === 'BLACK') {
      //
    } else if (node.uncle && node.uncle.color === 'RED') {
      this.repairInsertCase3(node)
    } else {
      this.repairInsertCase4(node)
    }
  }

  private repairInsertCase3(node: Node) {
    console.log('repair 3')
    node.parent.color = 'BLACK'
    node.uncle.color = 'BLACK'
    node.grandparent.color = 'RED'
    this.insertRepair(node.grandparent)
  }

  private repairInsertCase4(node: Node) {
    console.log('repair 4')
    if (node === node.parent.right && node.parent === node.grandparent.left) {
      node.parent.rotateLeft()
      this.repairInsertCase4Step2(node.left)
    } else if (
      node === node.parent.left &&
      node.parent === node.grandparent.right
    ) {
      node.parent.rotateRight()
      this.repairInsertCase4Step2(node.right)
    } else {
      this.repairInsertCase4Step2(node)
    }
  }

  private repairInsertCase4Step2(node: Node) {
    if (node === node.parent.left) {
      node.grandparent.rotateRight()
    } else {
      node.grandparent.rotateLeft()
    }
    node.parent.color = 'BLACK'
    node.grandparent.color = 'RED'
  }

  toString() {
    if (!this.root) {
      return '<Empty tree>'
    }
    return this.root.toString()
  }
}
