function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
        return middle;
    }
    if (arr[middle] < target) {
        return binarySearch(arr, target, middle + 1, end);
    }
    else if (arr[middle] > target) {
        return binarySearch(arr, target, start, middle + 1);
    }
    return -1;
}
console.log(binarySearch([1, 3, 4, 6, 7, 8, 9, 10, 12, 35], 10));
