/*
函数柯里化（Currying）是一种函数式编程的技术，
它将一个多参数的函数转换成一系列接受单个参数的函数，
使得函数的调用更加灵活和组合。
柯里化的核心思想是将原函数拆分成多个部分，
每部分接受一个参数，
然后返回一个新的函数，
继续接受下一个参数，
直到所有参数都被处理完毕，
最后返回原函数的结果。
*/

var add = function (m) {
    var temp = function (n) {
        return add(m + n);
    }
    temp.toString = function () {
        return m;
    }
    return temp;
};

const test = () => {
    console.log(add(3)(4)(5));
    console.log(add(3)(6)(9)(25));
}
