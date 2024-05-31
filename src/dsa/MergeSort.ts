function merge(arr: number[], left: number[], right: number[]) {
    let i = 0,
        l = 0,
        r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            arr[i] = left[l];
            l++;
            i++;
        } else {
            arr[i] = right[r];
            r++;
            i++;
        }
    }

    while (l < left.length) {
        arr[i] = left[l];
        l++;
        i++;
    }

    while (r < right.length) {
        arr[i] = right[r];
        r++;
        i++;
    }
}

function ms(arr: number[]) {
    if (arr.length <= 1) return;

    const m = Math.floor(arr.length / 2);
    const left: number[] = [];
    const right: number[] = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < m) {
            left[i] = arr[i];
        } else {
            right[j] = arr[i];
            j++;
        }
    }

    ms(left);
    ms(right);

    merge(arr, left, right);
}

export default function merge_sort(arr: number[]): void {
    ms(arr);
}
