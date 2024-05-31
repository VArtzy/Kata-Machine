import quick_sort from "@code/QuickSort"
import isPairSum from "@code/TwoPointer"

test("Is pair sum equal to target", function () {
    const arr = [20, 80, 10, 50, 35, 75]
    quick_sort(arr)
    isPairSum(arr, 70)
})
