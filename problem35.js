function myMap(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
}

myMap([1, 2, 3], x => x * 2); // [2, 4, 6]