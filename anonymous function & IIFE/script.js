// Anonymous Function: printOddNumbers
// Input: [1, 2, 3, 4, 5]
let printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };
  
  // Anonymous Function: convertToTitleCaps
  // Input: ["hello", "world", "javascript"]
  let convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  // Anonymous Function: sumOfNumbers
  // Input: [1, 2, 3, 4, 5]
  let sumOfNumbers = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  
  // Anonymous Function: isPrime
  // Input: 5
  let isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  // Anonymous Function: medianOfArrays
  // Input: ([1, 3, 5], [2, 4, 6])
  let medianOfArrays = function(arr1, arr2) {
    let mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 === 0 ? (mergedArr[mid] + mergedArr[mid - 1]) / 2 : mergedArr[mid];
  };
  
  // Anonymous Function: removeDuplicates
  // Input: [1, 2, 2, 3, 3, 4, 5, 5]
  let removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
  
  // Anonymous Function: rotateArray
  // Input: ([1, 2, 3, 4, 5], 2)
  let rotateArray = function(arr, k) {
    return arr.slice(k).concat(arr.slice(0, k));
  };
  
  // Anonymous Function: isPalindrome
  // Input: "madam"
  let isPalindrome = function(str) {
    return str === str.split("").reverse().join("");
  };
  
  // IIFE
  (function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5]);
  
  // IIFE
  let titleCaps = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  })(["hello", "world", "javascript"]);
  console.log(titleCaps);
  
  // IIFE
  let sum = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  })([1, 2, 3, 4, 5]);
  console.log(sum);
  
  // IIFE
  let primes = (function(arr) {
    let isPrime = function(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    return arr.filter(num => isPrime(num));
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primes);
  
  // IIFE
  let median = (function(arr1, arr2) {
    let mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 === 0 ? (mergedArr[mid] + mergedArr[mid - 1]) / 2 : mergedArr[mid];
  })([1, 3, 5], [2, 4, 6]);
  console.log(median);
  
  // IIFE
  let uniqueArr = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  })([1, 2, 2, 3, 3, 4, 5, 5]);
  console.log(uniqueArr);
  
  // IIFE
  let rotatedArr = (function(arr, k) {
    return arr.slice(k).concat(arr.slice(0, k));
  })([1, 2, 3, 4, 5], 2);
  console.log(rotatedArr);
  
  // IIFE
  let palindromesArr = (function(arr) {
    let isPalindrome = function(str) {
      return str === str.split("").reverse().join("");
    };
  
    return arr.filter(str => isPalindrome(str));
  })(["madam", "hello", "level", "world", "rotor"]);
  console.log(palindromesArr);
  