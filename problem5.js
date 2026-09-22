function checkSign(n) {
    if (n > 0) {
        return 'positive';
    } else if (n < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

// Examples
console.log(checkSign(-5)); // 'negative'
console.log(checkSign(0));  // 'zero'
console.log(checkSign(5));  // 'positive'