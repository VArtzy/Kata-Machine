function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (curr === needle) {
        path.push(curr);
        return true;
    }
    if (seen[curr]) return false;
    seen[curr] = true;

    // Pre
    path.push(curr);

    // Recursive
    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        const curr = list[i].to;
        if (walk(graph, curr, needle, seen, path)) return true;
    }

    // Post
    path.pop();
    return false;
}
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) return null;

    return path;
}
