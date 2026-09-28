function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    resolvedCount++;

                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

myPromiseAll([p1, p2, p3]).then(results => console.log(results));