function toFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5 + 32) * 100) / 100;
}

console.log(toFahrenheit(37));   // 98.6
console.log(toFahrenheit(0));    // 32
console.log(toFahrenheit(100));  // 212