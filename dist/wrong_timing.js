function wrongTiming(times) {
    for (let i = 1; i < times.length; i++) {
        if (times[i][0] < times[i - 1][1]) {
            times[i][0] = times[i - 1][1] + 1;
        }
    }
    return times;
}
console.log(wrongTiming([
    [0, 5],
    [4, 12],
    [13, 15],
]));
