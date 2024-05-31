type Node = {
    isWord: boolean;
    children: Node[];
};

export default class Trie {
    private head: Node;
    constructor() {
        this.head = { isWord: false, children: [] };
    }

    insert(item: string): void {
        let curr = this.head;
        for (let i = 0; i < item.length; ++i) {
            const idx = this.idx(item[i]);
            if (curr.children[idx]) {
                curr = curr.children[idx];
            } else {
                const node = { isWord: false, children: [] };
                curr.children[idx] = node;
                curr = node;
            }
        }
        curr.isWord = true;
    }
    delete(item: string): void {
        let curr = this.head;
        this.unmark(curr, item, 0);
    }
    find(partial: string): string[] {
        const list: string[] = [];
        const words: string[] = [];
        let curr = this.head;
        for (let i = 0; i < partial.length; ++i) {
            const node = curr.children[this.idx(partial[i])];
            if (node) curr = node;
            else return [];
        }
        this.fill(curr, words, list, partial);
        return words;
    }
    private unmark(node: Node, item: string, idx: number) {
        if (idx >= item.length) {
            node.isWord = false;
            return;
        }
        const n = node.children[this.idx(item[idx])];
        if (n) this.unmark(n, item, idx + 1);
    }
    private fill(node: Node, words: string[], list: string[], partial: string) {
        if (node.isWord) words.push(partial + list.join(""));
        for (const idx in node.children) {
            list.push(String.fromCharCode(parseInt(idx) + "a".charCodeAt(0)));
            this.fill(node.children[idx], words, list, partial);
            list.pop();
        }
    }
    private idx(str: string) {
        return str.charCodeAt(0) - "a".charCodeAt(0);
    }
}
