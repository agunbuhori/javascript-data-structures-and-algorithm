function palindrome(word) {
    if (word.length === 1) {
        return "yes";
    }
    var start = 0;
    var end = word.length - 1;
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
