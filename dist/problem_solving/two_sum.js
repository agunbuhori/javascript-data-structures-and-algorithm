function twoSum(arr, target) {
    const save = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (save[arr[i]]) {
            return [save[arr[i]], i];
        }
        save[complement] = i;
    }
    return [-1, -1];
}
console.log(twoSum([1, 2, 5, 6, 7, 9], 9));
