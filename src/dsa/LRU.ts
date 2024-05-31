type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class LRU<K, V> {
    private length: number;
    private tail?: Node<V>;
    private head?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity = 10) {
        this.length = 0;
        this.tail = this.head = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key);
        if (node) {
            this.detach(node);
            this.prepend(node);
            node.value = value;
        } else {
            node = this.createNode(value);
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
            this.prepend(node);
            this.length++;
            this.trimCache();
        }
    }

    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if (!node) return undefined;

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private createNode(value: V): Node<V> {
        return { value };
    }

    private detach(node: Node<V>) {
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail = this.tail.prev;

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache() {
        if (this.capacity >= this.length) return;

        const tail = this.tail as Node<V>;
        this.detach(tail);
        const key = this.reverseLookup.get(tail) as K;
        this.reverseLookup.delete(tail);
        this.lookup.delete(key);
        this.length--;
    }
}
