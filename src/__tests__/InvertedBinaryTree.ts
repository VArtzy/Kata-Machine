import { invert_tree, invert_tree_naive } from '@code/InvertedTree'
import { tree, tree2 } from "./tree";

test("invert tree", function () {
    console.log(invert_tree(tree))
    console.log(invert_tree(tree2))
    console.log(invert_tree_naive(tree))
    console.log(invert_tree_naive(tree2))
});
