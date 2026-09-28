async function retry(fn, times) {
    let lastError;

    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
        }
    }

    throw lastError;
}

await retry(unstableFetch, 3);