export const ruleset = [
    [3, "Fizz"],
    [5, "Bazz"],
    [7, "Buzz"],
    [11, "Bizz"],
];

export default function fizzBuzz(r: typeof ruleset, l: number) {
    for (let i = 1; i <= l; ++i) {
        let output = "";
        for (let j = 0; j < r.length; ++j) {
            if (i % +r[j][0] === 0) output += r[j][1];
        }
    }
}
