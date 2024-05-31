type Item<T, V> = {
    key?: T;
    value?: V;
};

export default class Map<T extends string | number, V> {
    private length: number;
    private capacity: number;
    private LOAD_FACTOR = 0.7;
    private bucket: [Item<T, V>][];

    constructor() {
        this.length = 0;
        this.capacity = 10;
        this.bucket = Array.from({ length: this.capacity });
    }

    get(key: T): V | undefined {
        const bucket = this.bucket[this.hash(key, this.capacity)];
        for (let i = 0; i < bucket?.length; ++i) {
            if (bucket[i].key === key) return bucket[i].value;
        }
        return undefined;
    }
    set(key: T, value: V): void {
        if (this.length / this.capacity >= this.LOAD_FACTOR) this.resize();
        this.length++;
        const hash = this.hash(key, this.capacity);
        if (!this.bucket[hash]) this.bucket[hash] = [{ key, value }];
        else this.bucket[hash].push({ key, value });
    }
    delete(key: T): V | undefined {
        const bucket = this.bucket[this.hash(key, this.capacity)];
        for (let i = 0; i < bucket?.length; ++i) {
            if (bucket[i].key === key) {
                this.length--;
                const out = bucket[i].value;
                bucket[i] = {};
                return out;
            }
        }
        return undefined;
    }
    size(): number {
        return this.length;
    }

    private resize() {
        this.capacity += 5;
        const temp = this.bucket;
        this.bucket = Array.from({ length: this.capacity });
        this.length = 0;
        for (const i in temp) {
            if (!temp[i]) continue;
            for (let j = 0; j < temp[i].length; j++) {
                this.set(temp[i][j].key as T, temp[i][j].value as V);
            }
        }
    }

    private hash(key: T, size: number): number {
        let hash = 17;
        const k = key.toString();
        for (let i = 0; i < k.length; i++) hash += 13 + k.charCodeAt(i);
        return hash % size;
    }
}
