function invertObject(obj) {
    return Object.entries(obj).reduce((result, [key, value]) => {
        result[value] = key;
        return result;
    }, {});
}

// Examples
console.log(invertObject({ a: 1, b: 2 })); // { '1': 'a', '2': 'b' }