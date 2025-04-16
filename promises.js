// Promise States:
// Pending – initial state
// Fulfilled – operation completed successfully (resolve)
// Rejected – operation failed (reject)

// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// when you use fetch(), the Promise resolves to a Response object

fetch('https://jsonplaceholder.typicode.com/todos') // returns a promise

fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>console.log(data)); //adding .then which is called the moment the promise is fulfilled

console.log('after') // this will execute before fetch because js is async - the data will arrive later as a result this console log will finish first


// .catch to catch errors, eg. no internet, error with .json() or any then() throwing error
// Even if the server responds with a 404 or 500, the fetch() still resolves (not rejects), because the request itself succeeded — you’d need to manually check response.ok.
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json()) // this also returns a promise!
  .then(data => {
    console.log(data); // your parsed JSON data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });