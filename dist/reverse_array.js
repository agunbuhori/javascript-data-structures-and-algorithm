function reverseArray(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
