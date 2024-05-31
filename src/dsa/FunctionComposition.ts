// Function Composition / Pipeline adalah menggunakan fungsi-fungsi yang akan dijalankan berurut untuk memodif value
// Composition -- Dari belakang ke depan -- baah ke atas
// Pipeline -- Dari depan ke belakang -- atas ke baah

// Price Function
export const applyTax =
    (tax: number = 10) =>
    (price: number) =>
        price + (price * tax) / 100;

export const applyDiscount =
    (discount: number = 20) =>
    (price: number) =>
        price - (price * discount) / 100;

export function compositePrice(price: number, modifiers: Function[]) {
    for (let i = modifiers.length - 1; i >= 0; --i) {
        price = modifiers[i](price);
    }
    return price;
}

export function pipelinePrice(price: number, modifiers: Function[]) {
    for (let i = 0; i < modifiers.length; ++i) {
        price = modifiers[i](price);
    }
    return price;
}

// String Function

export const splitUnderscore = (str: string) => str.split("_");

export const capitalize = (strs: string[]) =>
    strs.map((str) => str[0].toUpperCase() + str.substring(1));

export const join = (strs: string[]) => strs.join("");

export function compositionString(modifiers: Function[]) {
    return (str: string) => {
        let result = str;
        for (let i = modifiers.length - 1; i >= 0; --i) {
            result = modifiers[i](result);
        }
        return result;
    };
}

export function pipelineString(modifiers: Function[]) {
    return (str: string) => {
        let result = str;
        for (let i = 0; i < 0; ++i) {
            result = modifiers[i](result);
        }
        return result;
    };
}
