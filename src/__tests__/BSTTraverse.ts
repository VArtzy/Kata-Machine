import { iot, pot, search, sot } from "@code/BSTTraversal";
import { binarysearchtree, unbalancebinarysearchtree } from "./bst";

test("Binarysearchtree pre order", function () {
    expect(pot(binarysearchtree)).toEqual([50, 30, 25, 39, 69, 55, 80]);
    expect(pot(unbalancebinarysearchtree)).toEqual([50, 30, 25, 39, 69, 55, 80, 100]);
});

test("Binarysearchtree in order", function () {
    expect(iot(binarysearchtree)).toEqual([25, 30, 39, 50, 55, 69, 80]);
    expect(iot(unbalancebinarysearchtree)).toEqual([25, 30, 39, 50, 55, 69, 80, 100]);
});

test("Binarysearchtree post order", function () {
    expect(sot(binarysearchtree)).toEqual([25, 39, 30, 55, 80, 69, 50]);
    expect(sot(unbalancebinarysearchtree)).toEqual([25, 39, 30, 55, 100, 80, 69, 50]);
});

test("Binarysearchtree search value exist", function () {
    expect(search(binarysearchtree, 55)).toEqual(true);
    expect(search(binarysearchtree, 25)).toEqual(true);
    expect(search(binarysearchtree, 80)).toEqual(true);
    expect(search(binarysearchtree, 2)).toEqual(false);
    expect(search(binarysearchtree, 100)).toEqual(false);
    expect(search(unbalancebinarysearchtree, 100)).toEqual(true);
    expect(search(unbalancebinarysearchtree, 120)).toEqual(false);
    expect(search(unbalancebinarysearchtree, 5)).toEqual(false);
});
