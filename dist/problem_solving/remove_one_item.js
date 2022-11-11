function removeOneItem(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
        if (arr[i + count]) {
            arr[i] = arr[i + count];
        }
    }
    return arr.slice(0, -1);
}
console.log(removeOneItem([1, 2, 3, 4, 5], 2));
