// js by default is always sync
// with await we will wait for the code to respond

// JavaScript is synchronous. All code is added to the stack and is run synchronously from there. 
// If async code is triggered during this process, the callback is added to the task queue, and only when the call stack is empty, the callback is pushed onto the stack and executed

// When async code is triggered (like fetch, setTimeout, etc.), it does not stay on the stack — instead:
// It gets offloaded to the Web APIs (e.g., timer, network).
// Once done, the callback (or .then()) goes to the Task Queue (or Microtask Queue for Promises).
// The Event Loop watches the Call Stack.
// When the stack is empty, it pulls tasks from the queue and pushes them onto the stack to run.

async function getTodos() {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
   const data = await res.json()
   console.log(data)

   return data;
}

const todos = getTodos();

console.log(todos); // will return promise as we are not awaiting 

// but if we await

const todo = await getTodos();
console.log(todo)

console.log('test')




// Main Stack:               Web APIs:               Task Queue:
// ------------              -----------             -----------
// console.log("1")   --->                          

// setTimeout(...)     --->   (timer running)  --->   after 1s → callback ready

// console.log("3")    --->                          

// (call stack empty)  <---  Event loop moves callback over

// callback logs "2"


console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// Here’s what actually happens:

// console.log("1") → pushed to stack → runs → pops off.
// setTimeout(...) → pushed to stack → passed to Web API → pops off immediately.
// The callback inside setTimeout doesn't go to the stack yet.
// console.log("3") → pushed to stack → runs → pops off.
// After 1000ms, the timer callback moves to the Task Queue.
// The Event Loop checks if the Call Stack is empty.
// If empty, it moves the callback to the stack → runs it → logs "2".