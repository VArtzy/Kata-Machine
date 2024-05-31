import Queue from "./Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q = new Queue();
    q.enqueue(source);

    do {
        const curr = q.deque() as number;
        if (curr === needle) break;

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            if (adjs[i] === 0) continue;
            if (seen[i]) continue;

            seen[i] = true;
            prev[i] = curr;
            q.enqueue(i);
        }
    } while (q.length);

    // walk backward from whom array (prev)
    if (prev[needle] === -1) return null;

    let curr = needle;
    const out = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source, ...out.reverse()];
}
