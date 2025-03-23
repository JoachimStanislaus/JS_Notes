// Array filter method

// Array filter applies a conditional filter to each of the elements in the array and returns a new array.
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

console.log(numbers) // Output: nums 1-100

const filteredNum = numbers.filter((num)=>num < 10) 

console.log(filteredNum) // Output: array 1-9