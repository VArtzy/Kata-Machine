import Queue from "@code/Queue";

export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    const q = new Queue();
    q.enqueue(source);
    seen[source] = true;

    while (q.length) {
        const curr = q.deque() as number;
        if (curr === needle) break;

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i].to;
            if (seen[edge]) continue;

            seen[edge] = true;
            prev[edge] = curr;
            q.enqueue(edge);
        }
    }

    if (prev[needle] === -1) return null;

    let curr = needle;
    const out = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source, ...out.reverse()];
}
