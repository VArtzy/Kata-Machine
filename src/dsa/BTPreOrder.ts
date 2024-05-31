function walk(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) return path;

    // Recursion
    // Pre
    path.push(curr.value);

    // Recursive
    walk(curr.left, path);
    walk(curr.right, path);

    // Post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
