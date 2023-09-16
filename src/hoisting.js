/*
变量提升：
1.变量声明会被提升
2.函数声明会被提升
在这里匿名函数中的var a = (b = 3)被变量提升了
*/
/*
等效代码：
    var a, b=a
    (function () {
        console.log(a);
        console.log(b);
        b = 3;
        console.log(a);
        console.log(b);
    })()
    console.log(a);
    console.log(b);
*/
const test = () => {
    var a, b
    (function () {
        console.log(a);
        console.log(b);
        var a = (b = 3);
        console.log(a);
        console.log(b);
    })()
    console.log(a);
    console.log(b);
}

test();
/*
output:
undefined
undefined
3
3
undefined
3
*/