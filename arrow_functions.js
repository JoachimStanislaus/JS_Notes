// Arrow Functions

const getYear = (str) => str.split('-')[0];

const getYear2 = (str) => {
    return str.split('-')[0];
}

// Bad example: if you use a function block {} you will need to use return key otherwise if it is a one liner no return key is needed
const getYearBad = (str) => {
    str.split('-')[0];
}

console.log(getYear('2024-12-30'))

console.log(getYear2('2024-12-30'))

console.log(getYearBad('2024-12-30'))