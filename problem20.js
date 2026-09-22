function findDuplicateNames(arr) {
    const freq = {};
    for (let obj of arr) {
        freq[obj.name] = (freq[obj.name] || 0) + 1;
    }

    const duplicates = [];
    for (let name in freq) {
        if (freq[name] > 1) {
            duplicates.push(name);
        }
    }
    return duplicates;
}

// Example
console.log(findDuplicateNames([{ name: 'Ali' }, { name: 'Sara' }, { name: 'Ali' }]));
// ['Ali']