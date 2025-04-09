
fetch('https://jsonplaceholder.typicode.com/todos') // returns a promise

fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>console.log(data)); //adding .then which is called the moment the promise is fulfilled

console.log('after') // this will execute before fetch because js is async - the data will arrive later as a result this console log will finish first