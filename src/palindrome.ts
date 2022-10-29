function palindrome(word: string) {
  if (word.length === 1) {
    return "yes";
  }

  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return "no";
    }

    start++;
    end--;
  }

  return "yes";
}

console.log(palindrome("kapak"));
console.log(palindrome("kapuk"));
console.log(palindrome("tamat"));
console.log(palindrome("tomat"));
console.log(palindrome("racerecar"));
