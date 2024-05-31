export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    public array: Array<T>;

    constructor(capacity = 10) {
        this.length = 0;
        this.capacity = capacity;
        this.array = new Array(capacity);
    }

    prepend(item: T): void {
        this.grow();
        for (let i = this.length; i > 0; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        this.grow();
        if (idx === 0) return this.prepend(item);
        else if (idx === this.length) return this.append(item);

        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[idx] = item;
        this.length++;
    }
    append(item: T): void {
        this.grow();
        this.array[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                const out = this.array[i];
                for (let j = i; j < this.length; j++) {
                    this.array[j] = this.array[j + 1];
                }
                this.length--;
                return out;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        return this.array[idx];
    }
    removeAt(idx: number): T | undefined {
        const out = this.array[idx];
        for (let i = idx; i < this.length; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;
        return out;
    }

    private grow(): void {
        if (this.capacity > this.length) return;

        this.capacity = this.capacity * 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
}
