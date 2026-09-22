function makeCounter() {
    let count = 0; // private variable, only accessible via closure

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        },
    };
}

// Example
const c = makeCounter();
c.increment();
c.increment();
console.log(c.getCount()); // 2

c.decrement();
console.log(c.getCount()); // 1