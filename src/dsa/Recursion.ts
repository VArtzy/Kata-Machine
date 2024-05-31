export default function sum(n: number): number {
    if (n === 1) return 1;

    const total = n + sum(n - 1); // recursive
    return total;
}
