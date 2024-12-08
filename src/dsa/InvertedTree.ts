export function invert_tree(root: BinaryNode<number> | null) {
    if (!root) return null;
    const left = invert_tree(root.left);
    const right = invert_tree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

export function invert_tree_naive(root: BinaryNode<number> | null) {
    if (!root) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invert_tree(root.left);
    invert_tree(root.right);
    return root;
}
