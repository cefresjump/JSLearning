/*
chatGPT对test2的解释：
最重要的区别在于，
这里使用了let关键字声明变量i，
它具有块级作用域。
这意味着每次迭代都会创建一个新的 i 变量，
而不是在整个函数中共享一个 i。
*/
function test1() {
    console.log('---test1---')
    let arr = [];
    for (var i = 0; i < 4; i++) {
        arr.push(function () { console.log(i) });
    }
    arr.forEach((e) => { e(); })
}

function test2() {
    console.log('---test2---')
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(function () { console.log(i) });
    }
    arr.forEach((e) => { e(); })
}

test1()
test2()