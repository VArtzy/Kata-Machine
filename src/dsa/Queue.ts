type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;

        const node: Node<T> = { value: item };
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.tail!.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        this.length = Math.max(this.length - 1, 0);

        const head = this.head;
        this.head = this.head?.next;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
