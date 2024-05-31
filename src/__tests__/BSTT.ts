import { BST } from "@code/BST";
import { iot, search } from "@code/BSTTraversal";

test("Binary Search Tree", function () {
    const bst = new BST<number>();

    expect(bst.height).toBe(0);
    expect(bst.node).toBeNull();

    bst.insert(20);
    expect(bst.height).toBe(1);
    expect(bst.node).toMatchObject<BinaryNode<number>>({ value: 20, left: null, right: null });

    bst.insert(10);
    bst.insert(30);
    expect(bst.height).toBe(2);
    expect(search(bst.node, 10)).toBe(true);
    expect(search(bst.node, 25)).toBe(false);

    bst.insert(5);
    bst.insert(15);
    bst.insert(25);
    bst.insert(35);
    expect(bst.height).toBe(3);
    expect(search(bst.node, 5)).toBe(true);
    expect(search(bst.node, 35)).toBe(true);
    expect(search(bst.node, 40)).toBe(false);

    bst.insert(3);
    bst.insert(2);
    bst.insert(1);
    expect(bst.height).toBe(6);
    expect(search(bst.node, 1)).toBe(true);
    expect(search(bst.node, 0)).toBe(false);

    expect(iot(bst.node!)).toEqual([1, 2, 3, 5, 10, 15, 20, 25, 30, 35]);

    // case 1
    bst.delete(1);
    expect(bst.delete(1)).toBe(undefined);
    expect(search(bst.node, 1)).toBe(false);

    // case 2
    bst.delete(5);
    expect(search(bst.node, 5)).toBe(false);
    expect(search(bst.node, 3)).toBe(true);

    // case 3 complex
    bst.insert(23);
    bst.insert(26);
    bst.insert(32);
    bst.insert(50);
    // bst.insert(31);
    bst.insert(33);
    bst.insert(34);
    bst.delete(30);
    expect(search(bst.node, 30)).toBe(false);
    expect(search(bst.node, 32)).toBe(true);

    const bst2 = new BST<number>()
    bst2.insert(30)
    bst2.insert(60)
    bst2.insert(90) 
    console.log(bst2.rr(bst2.node))
});
