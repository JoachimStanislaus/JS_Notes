// Short Circuiting

// if first value true , get 2nd value
// if first value false, get first value
console.log(true && 'some string'); // Output: some string
console.log(false && 'some string'); // Output: false

// falsy values: 0, '', null, undefined

// if first value true , get 2nd value
// if first value false, get first value
console.log('jonas' && 'some string') // Output: some string
console.log(0 && 'some string') // Output: 0

// if first value true , get first value
// if first value false, get 2nd value
console.log(true || 'Some string') // Output: true
console.log(false || 'Some string') // Output: Some string

// if first value null or undefined, return 2nd value
// if first value is not null or undefined, return 1st value
console.log(undefined ?? '2nd value') // Output: 2nd value
console.log(1 ?? '2nd value') // Output: 1
console.log(NaN ?? 'Some Value') // Output: NaN