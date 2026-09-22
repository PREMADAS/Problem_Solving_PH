function factorial(n) {
    if (n === 0) {
        return 1; // base case
    }
    return n * factorial(n - 1); // recursive case
}

// Examples
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1