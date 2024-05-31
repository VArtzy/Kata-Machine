type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;

        const node: Node<T> = { value: item };
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(this.length - 1, 0);

        const head = this.head;
        this.head = head?.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
