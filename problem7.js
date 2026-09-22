function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Examples
console.log(countVowels('hello'));      // 2
console.log(countVowels('javascript')); // 3