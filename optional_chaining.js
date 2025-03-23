// Optional Chaining

const sumNums = {
    num1: {value:10},
}

// Using optional chaining, because num2 does not exist, we won't try to get the value rather and we won't get an error, rather we will get an output NaN

function getTotalSum1(obj) {
    const num1 = obj.num1.value
    const num2 = obj.num2?.value
    return num1 + num2
}

console.log(getTotalSum1(sumNums)) 

//  Using optional chaining + ?? we can replace the undefined value with 0

function getTotalSum2(obj) {
    const num1 = obj.num1.value
    const num2 = obj.num2?.value ?? 0
    return num1 + num2
}

console.log(getTotalSum2(sumNums)) // Output: 10

// bad example - if we don't use optional chaining
function getTotalSum(obj) {
    const num1 = obj.num1.value
    const num2 = obj.num2.value  // Output: Error: cannot read properties of undefined (reading 'value')
    return num1 + num2
}

console.log(getTotalSum(sumNums)) // Output: Error: cannot read properties of undefined (reading 'value')