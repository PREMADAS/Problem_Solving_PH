function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUserData(id) {
    await delay(500);
    return { id, name: 'Test User' };
}

// Example
async function run() {
    const user = await getUserData(1);
    console.log(user); // (500ms por) { id: 1, name: 'Test User' }
}

run();