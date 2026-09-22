function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        };
    };
}

// Example
const add = curry((a, b) => a + b);
console.log(add(2)(3)); // 5