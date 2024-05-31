import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
    list.insertAt(3, 0);
    expect(list.capacity).toEqual(3);
    list.insertAt(11, 3);
    expect(list.capacity).toEqual(6);
    list.insertAt(6, 2);
    expect(list.get(0)).toEqual(3);
    expect(list.get(4)).toEqual(11);
    expect(list.get(2)).toEqual(6);
});
