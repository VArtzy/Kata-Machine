export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) return -1;

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) return;

        const lv = this.data[lIdx];
        const rv = this.data[rIdx];
        const v = this.data[idx];

        if (lv > rv && v > rv) {
            this.data[rIdx] = v;
            this.data[idx] = rv;
            this.heapifyDown(rIdx);
        } else if (rv > lv && v > lv) {
            this.data[lIdx] = v;
            this.data[idx] = lv;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const p = this.parent(idx);
        const pv = this.data[p];
        const v = this.data[idx];

        if (pv > v) {
            this.data[p] = v;
            this.data[idx] = pv;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
