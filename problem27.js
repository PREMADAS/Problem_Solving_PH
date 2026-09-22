function mergeArrays(...arrays) {
    return arrays.flat();
}

// Examples
console.log(mergeArrays([1, 2], [3, 4], [5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays([1], [2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]