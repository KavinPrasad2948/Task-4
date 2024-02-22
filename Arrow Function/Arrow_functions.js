const printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));

const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primes = arr => arr.filter(num => isPrime(num));

const isPalindrome = str => str === str.split("").reverse().join("");

const palindromes = arr => arr.filter(str => isPalindrome(str));

const arr = [1, 2, 3, 4, 5];
console.log("Odd Numbers:");
printOddNumbers(arr);
console.log("Title Caps:");
console.log(convertToTitleCaps(["hello", "world", "javascript"]));
console.log("Sum:");
console.log(sumOfNumbers(arr));
console.log("Primes:");
console.log(primes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Palindromes:");
console.log(palindromes(["madam", "hello", "level", "world", "rotor"]));
