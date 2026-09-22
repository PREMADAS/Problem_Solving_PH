function memoize(fn) {
    const cache = {};

    return function (n) {
        if (cache[n] !== undefined) {
            console.log('from cache');
            return cache[n];
        }
        console.log('computed');
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

// Example
const memoAdd = memoize(n => n + 10);
console.log(memoAdd(5)); // computed → 15
console.log(memoAdd(5)); // from cache → 15