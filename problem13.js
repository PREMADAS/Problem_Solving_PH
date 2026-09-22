function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Examples
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]