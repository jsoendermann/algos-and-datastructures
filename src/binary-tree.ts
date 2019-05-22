export interface Node {
  val: number
  left: Node | null
  right: Node | null
}

export function iterativePreorder(root: Node): number[] {
  const ret = [],
    stack = []

  stack.push(root)

  while (stack.length > 0) {
    const node = stack.pop()
    if (node) {
      ret.push(node.val)
      stack.push(node.right)
      stack.push(node.left)
    }
  }

  return ret
}

export function iterativeInorder(root: Node): number[] {
  const ret = [],
    stack = []

  stack.push([root, false])

  while (stack.length > 0) {
    const [node, hasProcessedLeft] = stack.pop()
    if (node) {
      if (hasProcessedLeft) {
        ret.push(node.val)
      } else {
        stack.push([node.right, false])

        stack.push([node, true])
        stack.push([node.left, false])
      }
    }
  }

  return ret
}

export function iterativePostorder(root: Node): number[] {
  const ret = [],
    stack = []

  stack.push([root, false])

  while (stack.length > 0) {
    const [node, hasProcessedBoth] = stack.pop()
    if (node) {
      if (hasProcessedBoth) {
        ret.push(node.val)
      } else {
        stack.push([node, true])
        stack.push([node.right, false])
        stack.push([node.left, false])
      }
    }
  }

  return ret
}
