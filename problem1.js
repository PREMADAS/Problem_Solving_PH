function swapVariables(a, b) {
    [a, b] = [b, a];
    return { a, b };
}


let result = swapVariables(5, 10);
console.log(`a = ${result.a}, b = ${result.b}`); 