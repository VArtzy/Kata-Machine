export default function isPairSum(arr: number[], sum: number): boolean {
    let i = 0
    let j = arr.length - 1

    while(i < j) {
        const pairSum = arr[i] + arr[j]
        if(pairSum == sum) return true
        if(pairSum > sum) j--
        if(pairSum < sum) i++
    }

    return false
}
