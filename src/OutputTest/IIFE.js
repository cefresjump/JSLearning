/*
立即调用函数表达式（Immediately Invoked Function Expression，IIFE）是一种 JavaScript 编程技术，它具有以下特点：
立即执行: IIFE 会立即执行函数，而不需要在其他地方调用它。这意味着函数定义后会立即执行，不需要显式调用。
私有作用域: IIFE 内部的变量在函数外部是不可访问的，这有助于创建私有作用域，防止变量污染全局命名空间。
数据封装: IIFE 可以用来封装一些数据或功能，以便在不污染全局命名空间的情况下执行特定任务。
传递参数: 您可以向 IIFE 传递参数，这些参数在函数内部可用，可以用于自定义函数的行为。
*/
/*
在这里var a = b = 3等效于
var a（定义提升）
其他代码
b = 3
a = b
此外，你应该看见c是暗的，因为没有被使用
*/
const test1 = () => {
    var a = 1, b = 2;
    (function () {
        console.log('before inner a:' + a);
        console.log('before inner b:' + b);
        var a = b = 3;
        console.log('after inner a:' + a);
        console.log('after inner b:' + b);
    })()
    console.log('outer a:' + a);
    console.log('outer b:' + b);
}

test1();
