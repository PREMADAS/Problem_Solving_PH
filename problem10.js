function countChar(str, char) {
    return str.split(char).length - 1;
}

// Examples
console.log(countChar('banana', 'a')); // 3