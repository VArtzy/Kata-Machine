import ab, { u8, u16 } from "@code/StaticArray";

test("Static Array", function () {
    expect(u8[0]).toBe(1);
    expect(u16[2]).toBe(4);
});
