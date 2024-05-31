import {
    applyDiscount,
    applyTax,
    capitalize,
    compositePrice,
    compositionString,
    join,
    pipelinePrice,
    pipelineString,
    splitUnderscore,
} from "@code/FunctionComposition";

test("Composition Price Function", () => {
    const prices = [150000, 100000, 50000];
    const priceModifiers = [
        [applyTax(), applyDiscount(20)],
        [applyTax()],
        [applyDiscount()],
    ];
    const expectedPrices = [132000, 110000, 40000];

    for (let i = 0; i < prices.length; ++i) {
        expect(compositePrice(prices[i], priceModifiers[i])).toBe(
            expectedPrices[i],
        );
    }
});

test("Pipeline Price Function", () => {
    const prices = [150000, 100000, 50000];
    const priceModifiers = [
        [applyTax(), applyDiscount(20)],
        [applyTax()],
        [applyDiscount()],
    ];
    const expectedPrices = [132000, 110000, 40000];

    for (let i = 0; i < prices.length; ++i) {
        expect(pipelinePrice(prices[i], priceModifiers[i])).toBe(
            expectedPrices[i],
        );
    }
});

test("Composition String Function", () => {
    const snakeCase = "my_name_is_farrel";
    const snakeToPascal = compositionString([
        join,
        capitalize,
        splitUnderscore,
    ]);

    expect(snakeToPascal(snakeCase)).toBe("MyNameIsFarrel");
});

test("Pipeline String Function", () => {
    const snakeCase = "my_name_is_farrel";
    const snakeToPascal = pipelineString([join, capitalize, splitUnderscore]);

    expect(snakeToPascal(snakeCase)).not.toBe("MyNameIsFarrel");
    expect(snakeToPascal(snakeCase)).toBe(snakeCase);
});
