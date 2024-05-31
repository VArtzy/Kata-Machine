type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    private getAt(idx: number) {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr;
    }

    private removeNode(node: Node<T> | undefined) {
        if (!node) return;

        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (this.head === node) {
            this.head = node.next;
        }
        if (this.tail === node) {
            this.tail = node.prev;
        }

        return node.value;
    }

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bonds");
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        let curr = this.getAt(idx) as Node<T>;

        const node = { value: item } as Node<T>;
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;
        if (node.prev) {
            node.prev.next = node;
        }
    }
    append(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) break;
            curr = curr.next;
        }

        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        return this.removeNode(this.getAt(idx));
    }
}
