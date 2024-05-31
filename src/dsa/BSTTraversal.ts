function preOrderTraverse(node: BinaryNode<number> | null, path: number[]) {
    if (!node) return path

    path.push(node.value)
    preOrderTraverse(node.left, path)
    preOrderTraverse(node.right, path)

    return path
}

function inOrderTraverse(node: BinaryNode<number> | null, path: number[]) {
    if (!node) return path

    inOrderTraverse(node.left, path)
    path.push(node.value)
    inOrderTraverse(node.right, path)

    return path
}

function postOrderTraverse(node: BinaryNode<number> | null, path: number[]) {
    if (!node) return path

    postOrderTraverse(node.left, path)
    postOrderTraverse(node.right, path)
    path.push(node.value)

    return path
}

export function search(node: BinaryNode<number> | null, value: number): boolean {
    if (!node) return false
    if (node.value === value) return true

        if (value > node.value) {
            return search(node.right, value)
        } else {
            return search(node.left, value)
        }
}

export function pot(head: BinaryNode<number>): number[] {
    return preOrderTraverse(head, [])
}

export function iot(head: BinaryNode<number>): number[] {
    return inOrderTraverse(head, [])
}

export function sot(head: BinaryNode<number>): number[] {
    return postOrderTraverse(head, [])
}
