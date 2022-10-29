function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function prime(last) {
    const sequence = [];
    for (let i = 2; i <= last; i++) {
        if (isPrime(i)) {
            sequence.push(i);
        }
    }
    return sequence;
}
console.log(prime(100));
