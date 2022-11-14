// write a function that sums up all elements in an array describe the time and space complexity
// this solution is O(n) time complexity and O(1) space complexity 
const sum = (array) => {
    // create a sum variable
    const sum = 0; // performed one time
    // loop through the array adding to sume each time
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // performed array.length times
    }
    return sum; // performed one time
}

// refactored solution for sum
// const sum = (array) => {
//     return array.reduce((sum, curNum) => sum + curNum, 0);
// }

// Fibonacci sequence, given a number n find the corresponding number in the sequence for example 4 would be 5
// this runs in linear time O(n) and O(1) space copmlexity
const fib = (n) => {
    // initiate a variable numbers to get the start of the sequence
    const numbers = [1, 1]; // runs once
    // iterate adding the correct number to the fibonacci sequence by summing the prior two elements 
    for (let i = 2; i <= n; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1]); // runs n times
    }
    return numbers[n]; // runs once
}

// console.log(fib(4));

// create a function that determines whether or not a function is prime
// this runs in linear time O(n) and O(1) space complexity
// const isPrime = (num) => {
//     // iterate starting at i = num - 1
//     // edge case if the number is 2
//     if (num === 2) return true; // runs once
//     for (let i = num - 1; i > 1; i--) {
//         if (num % i === 0) return false; // runs n - 1 times
//     }
//     return true; // runs once
// }

// console.log(isPrime(5));  // --> true
// console.log(isPrime(2));  // --> true
// console.log(isPrime(8));  // --> false

// refactored isPrime for better time complexity from O(n) to O(sqrt(n))
const isPrime = (num) => {
    // edge case if number is one
    if (num === 1) return false; // runs once
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) return false; // runs sqrt(n) times
    }
    return true; // runs once
}

``



// time complexity for this solution is O(log(n)) and space complexity is O(1)
// const isPowerOfTwo = (num) => {
//     if (number < 1) return false;
//     let dividedNumber = number;
//     while (dividedNumber !== 1) {
//         // check to see if the divided number would produce a number that has a decimal place / or is odd
//         if (dividedNumber % 2 === 0) return false;
//         dividedNumber = dividedNumber / 2;
//     }
//     return true;
// }

// refactored solution for isPowerOfTwo O(1) time and space complexity
const isPowerOfTwo = (num) => {
    if (number < 1) return false;
    return (number & (number - 1) === 0); 
}