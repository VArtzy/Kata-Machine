// Useable of Memoization -- gains massive performance:
// Presdo:
/*
    1. Create a cache storage
    2. Store every new/unique calculation
    3. Find if calculation with same parameter parameter exist then return calculated value
 */

// 1. Do a cache on expensive calculation so you dont have to make the calculation again -- from 9000ms to 1500ms
// O(n^2) (base & worst case) TO O(n^2) worst case & O(1) best case

const cache: number[] = []; // 1
export function square(n: number) {
    if (cache[n]) return cache[n]; // 3
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }
    cache[n] = result; // 2
    return result;
}

// 2. Dynamic Programming - Cache the same input in recursive function == from 1500ms to 1-2ms
// O(2^n) TO O(n)

export function fib(n: number, cache: number[] = []): number {
    if (cache[n]) return cache[n];
    let result;
    if (n <= 2) result = 1;
    else result = fib(n - 1, cache) + fib(n - 2, cache);
    cache[n] = result;
    return result;
}
