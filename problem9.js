function titleCase(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Examples
console.log(titleCase('hello world')); // 'Hello World'