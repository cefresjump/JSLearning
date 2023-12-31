/*
Q:解释JavaScript Event Loop
A:JavaScript的事件循环（Event Loop）是一种用于管理异步代码执行的机制。
它是JavaScript运行时环境的一部分，用于处理事件（例如用户输入、网络请求、定时器等）和回调函数的执行。
事件循环的核心思想是将异步任务排队并按照特定的顺序执行，而不会阻塞主线程的执行。
这允许 JavaScript 在执行异步操作时继续处理其他任务，保持了用户界面的响应性。
以下是事件循环的基本原理：
1. 调用栈（Call Stack）：JavaScript使用一个调用栈来跟踪函数的执行。当你调用一个函数，它会被推入调用栈，当函数执行完毕后，它会从调用栈中弹出。
2. 任务队列（Task Queue）：任务队列用于存储待执行的异步任务。这些任务可以是回调函数、定时器回调、网络请求的响应等。
任务队列中的任务按照它们的类型被分成不同的队列，其中最常见的是微任务队列（Microtask Queue）和宏任务队列（Macrotask Queue）。
3. 事件循环：事件循环是一个持续运行的进程，它不断地检查调用栈是否为空。如果调用栈为空，事件循环就会查看任务队列中是否有待执行的任务。
4. 执行任务：事件循环按照一定的优先级顺序执行任务。首先，它会执行微任务队列中的所有任务，然后执行宏任务队列中的一个任务。
然后，事件循环再次检查调用栈是否为空，重复这个过程。
5. 事件触发：当某个事件发生时（例如点击按钮、网络请求完成等），相关的回调函数会被放入适当的任务队列中等待执行。
6. Promise的微任务：使用Promise时，Promise的回调函数被认为是微任务，它们会在当前任务完成后立即执行，而不是等待到下一个宏任务。
总结来说，JavaScript的事件循环允许异步任务的执行，保持了应用程序的响应性。
它的工作方式是通过不断地将任务从队列中取出并执行，然后检查调用栈是否为空，
重复这个过程。这种机制使得JavaScript可以处理大量的异步操作，而不会阻塞主线程。这对于编写现代Web应用程序以及处理IO密集型任务非常重要。
*/

Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');

/*
output:
start
promise1
timer1
promise2
timer2
*/