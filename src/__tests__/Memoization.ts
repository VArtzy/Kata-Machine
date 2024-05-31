import { fib, square } from "@code/Memoization";

test("Square Memoization", () => {
    expect(square(10000)).toBe(100000000);
    expect(square(10000)).toBe(100000000);
    expect(square(10000)).toBe(100000000);
    expect(square(10000)).toBe(100000000);
    expect(square(10000)).toBe(100000000);
});

test("Fib Memoization", () => {
    expect(fib(41)).toBe(165580141);
});
