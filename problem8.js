function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Examples
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false