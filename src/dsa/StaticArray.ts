const ab = new ArrayBuffer(6);
export const u8 = new Uint8Array(ab);

u8[0] = 1;
u8[1] = 2;
u8[2] = 3;

u8[5] = 0; // This not resize the array; it will result in an error

export const u16 = new Uint16Array(ab);
u16[2] = 4;

export default ab;
