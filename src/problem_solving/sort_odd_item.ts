function sortOddItem(arr: number[]) {
  const odds = [];

  for (let i in arr) {
    if (arr[i] % 2 === 1) {
      odds.push(arr[i]);
    }
  }

  odds.sort((a, b) => b - a);

  for (let i in arr) {
    if (arr[i] % 2 == 1) {
      arr[i] = odds.shift();
    }
  }

  return arr;
}

console.log(sortOddItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));
