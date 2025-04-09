// Can be reassigned after initial declaration
// Used when the value will change
// block scoped (only accessible within the {} block where it is defined)
let age = 25;
age = 26;


// cannot be reassigned after initial declaration
// used when value should not change
// block scoped

const name = 'alice'

// unable to do name = 'bob' as cannot be reassigned
// But we can change contents of objects declared with const

const person = {name:'alice'};
person.name = 'bob';
person.age = 10;

console.log(person)