let printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

let convertToTitleCaps = function(arr) {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

let sumOfNumbers = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

let isPrime = function(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let medianOfArrays = function(arr1, arr2) {
  let mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(mergedArr.length / 2);
  return mergedArr.length % 2 === 0 ? (mergedArr[mid] + mergedArr[mid - 1]) / 2 : mergedArr[mid];
};

let removeDuplicates = function(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};

let rotateArray = function(arr, k) {
  return arr.slice(k).concat(arr.slice(0, k));
};

let isPalindrome = function(str) {
  return str === str.split("").reverse().join("");
};


console.log("Odd Numbers:");
printOddNumbers([1, 2, 3, 4, 5]);
console.log("Title Caps:");
console.log(convertToTitleCaps(["hello", "world", "javascript"]));
console.log("Sum:");
console.log(sumOfNumbers(arr));
console.log("Is Prime:");
console.log(isPrime(5));
console.log("Median:");
console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));
console.log("Remove Duplicates:");
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 5]));
console.log("Rotate Array:");
console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log("Is Palindrome:");
console.log(isPalindrome("madam"));
