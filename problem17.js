function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Examples
console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log(mergeObjects({ a: 1, b: 5 }, { b: 2 })); // { a: 1, b: 2 }