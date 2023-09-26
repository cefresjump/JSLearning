/*
解构赋值语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。
例子:
[a,b]=[10,20]
{name,age:year}={name:'Bob',age:24};
*/
/*
这里的赋值等效于
let a = 3;
a = 1;
let b = a;
b = 2;
let c = b;
*/
function test() {
    console.log('---test---')
    let [a = 3, b = a, c = b] = [1, 2];
    console.log(a + "," + b + "," + c);
}

test()