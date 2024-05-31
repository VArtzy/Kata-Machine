export default class RingBuffer<T> {
    public length: number;
    public capacity: number;
    private head: number;
    private tail: number;
    private items;

    constructor() {
        this.head = this.tail = 0;
        this.length = 0;
        this.capacity = 10;
        this.items = Array.from({ length: this.capacity });
    }

    push(item: T): void {
        if (this.isFull()) this.resize();
        this.items[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.length++;
    }

    get(idx: number): T | undefined {
        return this.items[(this.head + idx) % this.capacity] as T;
    }

    pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        const out = this.items[this.head];
        this.items[this.head] = undefined;
        this.head = (this.head + 1) % this.capacity;
        this.length--;
        return out as T;
    }
    private resize() {
        this.capacity *= 2;
        const temp = this.items;
        this.items = Array.from({ length: this.capacity });
        for (const idx in temp) this.items[parseInt(idx)] = temp[parseInt(idx)];
        this.tail = this.length;
    }
    private isFull() {
        return this.capacity === this.length;
    }
    private isEmpty() {
        return this.length === 0;
    }
}
