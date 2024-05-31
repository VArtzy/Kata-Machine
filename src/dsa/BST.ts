export class BST<T> {
    public height: number
    public node: BinaryNode<T> | null

//   private i(value: T, curr: BinaryNode<T> | null, h: number) {
//       const node = { value, left: null, right: null }
//       if (!curr) {
//           this.node = node
//           this.height++
//           return
//       }
//       if (h > this.height) this.height = h
//       if (value > curr.value) {
//           if (curr.right) this.i(value, curr.right, h + 1)
//               else curr.right = node
//       } else {
//           if (curr.left) this.i(value, curr.left, h + 1)
//               else curr.left = node
//       }
//   }

    private getSuccessor(node: BinaryNode<T>): T {
        if (!node.left) return node.value
        return this.getSuccessor(node.left)
    }

    private getPreccessor(node: BinaryNode<T>): T {
        if (!node.right) return node.value
        return this.getSuccessor(node.right)
    }

    constructor() {
        this.height = 0
        this.node = null
    }

    rr(node: BinaryNode<T> | null): BinaryNode<T> {
        const root = node!.right
        node!.right = root!.left
        root!.left = node
        return root!
    }

    insert(value: T) {
        let curr = this.node
        const node = { value, left: null, right: null }
        if (!curr) {
            this.node = node
            this.height++
            return
        }
        let h = 1
        for (let i = 0; i < this.height; i++) {
            h++
            if (h > this.height) this.height = h
            if (value > curr.value) {
                if (!curr.right) {
                    curr.right = node
                    return
                }
                curr = curr.right
            } else {
                if (!curr.left) {
                    curr.left = node
                    return
                }
                curr = curr.left
            }
        }
    }

//   insertRecursive(value: T) {
//       this.i(value, this.node, 2)
//   }

    delete(value: T, curr = this.node): T | undefined {
        if (!curr) return undefined
            if (curr.value === value) {
                if (curr.left && curr.right) {
                    const v = this.getPreccessor(curr.left)
                    this.delete(v, curr)
                    curr.value = v
                    return value
                }
                if (curr.left) {
                    curr = curr.left
                    return value
                }
                if (curr.right) {
                    curr = curr.right
                    return value
                }
                curr = null
                return value
            }
        if (curr.left?.value === value) {
            if (curr.left.left && curr.left.right) {
                const v = this.getPreccessor(curr.left.left)
                this.delete(v, curr.left)
                curr.left.value = v
                return value
            }
            if (curr.left.left) {
                curr.left = curr.left.left
                return value
            }
            if (curr.left.right) {
                curr.left = curr.left.right
                return value
            }
           curr.left = null 
           return value
        }
        if (curr.right?.value === value) {
            if (curr.right.left && curr.right.right) {
                const v = this.getSuccessor(curr.right.right)
                this.delete(v, curr.right)
                curr.right.value = v
                return value
            }
            if (curr.right.left) {
                curr.right = curr.right.left
                return value
            }
            if (curr.right.right) {
                curr.right = curr.right.right
                return value
            }
           curr.right = null 
           return value
        }

            if (value > curr.value) {
                return this.delete(value, curr.right)
            } else {
                return this.delete(value, curr.left)
            }
    }
}
