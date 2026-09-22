function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// Chained example (exactly as in the problem)
delay(1000)
    .then(() => {
        console.log('1 sec');
        return delay(2000);
    })
    .then(() => console.log('3 sec total'));