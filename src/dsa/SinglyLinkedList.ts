type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private getCurrBefAndCurr(idx: number) {
        let currBef = this.head;
        for (let i = 0; currBef && i < idx - 1; ++i) {
            currBef = currBef?.next;
        }

        const curr = currBef?.next;

        return [currBef, curr];
    }

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) throw new Error("Index out of bonds");

        if (idx === this.length) {
            this.prepend(item);
            return;
        } else if (idx === 0) {
            this.append(item);
            return;
        }

        this.length++;

        const [currBef, curr] = this.getCurrBefAndCurr(idx);

        const node = { value: item } as Node<T>;
        node.next = curr;
        if (currBef?.next) {
            currBef.next = node;
        }
        this.head = node;
    }

    append(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }

        let curr = this.head;
        for (let i = 0; curr.next && i < this.length - 1; ++i) {
            curr = curr.next;
        }

        curr.next = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        let currBef: Node<T> | undefined;

        for (let i = 0; i < this.length; ++i) {
            if (curr && curr?.value === item) break;
            currBef = curr;
            curr = curr?.next;
        }

        if (curr?.value !== item) return undefined;

        this.length--;

        if (!currBef) {
            this.head = curr.next;
            return curr.value;
        }

        currBef.next = curr?.next;

        return curr?.value;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        const [currBef, curr] = this.getCurrBefAndCurr(idx);

        if (!currBef) return;
        this.length--;

        currBef.next = curr?.next;
        if (!curr?.next) {
            this.head = curr;
            return currBef.value;
        }

        return curr?.value;
    }
}
