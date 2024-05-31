function partition(arr: number[], lo: number, hi: number) {
    // const m = hi; // #1 Pick last element as pivot or vice virsa (use first element need more 3 step)
    const m = Math.floor(lo + (hi - lo) / 2); // #2 Pick middle element as pivot (need more 3 step)
    // #3 Median of three element (first, mid, last)
    // let m = Math.floor(lo + (hi - lo) / 2);
    // const f = arr[lo]; // 9
    // const s = arr[m]; // 4
    // const t = arr[hi]; // 42
    // if ((s <= f && f <= t) || (t <= f && f <= s)) m = lo;
    // else if (t <= f && t >= s) m = hi;
    const pivot = arr[m];

    let tmp = arr[hi]; // these are 3 step
    arr[hi] = arr[m];
    arr[m] = tmp;

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            let tmp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
