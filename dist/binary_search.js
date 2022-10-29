function binarySearch(arr, target, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    var middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
        return middle;
    }
    if (arr[middle] > target) {
        return binarySearch(arr, target, start, middle - 1);
    }
    else if (arr[middle] < target) {
        return binarySearch(arr, target, middle - 1, end);
    }
}
console.log(binarySearch([2, 3, 6, 7, 8, 9], 7));
