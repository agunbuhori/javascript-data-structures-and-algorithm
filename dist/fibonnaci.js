function fibonnaci(length) {
    var sequence = [0, 1];
    for (var i = 2; i <= length; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence;
}
console.log(fibonnaci(10));
