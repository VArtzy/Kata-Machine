export const binarysearchtree: BinaryNode<number> = {
    value: 50,
    left: {
        value: 30,
        left: {
            value: 25,
            left: null,
            right: null
        },
        right: {
            value: 39,
            left: null,
            right: null
        }
    },
    right: {
        value: 69,
        left: {
            value: 55,
            left: null,
            right: null
        },
        right: {
            value: 80,
            left: null,
            right: null
        }
    }
}

export const unbalancebinarysearchtree: BinaryNode<number> = {
    value: 50,
    left: {
        value: 30,
        left: {
            value: 25,
            left: null,
            right: null
        },
        right: {
            value: 39,
            left: null,
            right: null
        }
    },
    right: {
        value: 69,
        left: {
            value: 55,
            left: null,
            right: null
        },
        right: {
            value: 80,
            left: null,
            right: {
                value: 100,
                left: null,
                right: null
            }
        }
    }
}

test("test", () => {});
