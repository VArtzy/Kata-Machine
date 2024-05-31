function walk(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) return path;

    // Recursion
    // Pre

    // Recursion
    walk(curr.left, path);
    // Post of left walk
    path.push(curr.value);
    // Pre of right walk
    walk(curr.right, path);

    // Post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
