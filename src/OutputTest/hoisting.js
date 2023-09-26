/*
变量提升是指在JavaScript中变量声明被提升到其作用域的顶部，
但变量的赋值保留在原始位置。这可能会导致一些意外的行为，
*/
function test() {
    var x; // 变量声明被提升
    console.log(x); // 输出：undefined
    x = 10; // 变量赋值保留在原始位置
    console.log(x); // 输出：10
}

test()