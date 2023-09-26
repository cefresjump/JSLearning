/*
一些计算，包括||，&&以及++，--，以及位运算以及优先级
*/
function test1() {
    console.log('---test1---')
    let num = 0;
    num += !num || 3;
    console.log(num);
}

function test2() {
    console.log('---test2---')
    var x = 10;
    console.log(x++);
}

function test3() {
    console.log('---test3---')
    let a = 1 + (1 > 2) ? 1 : 2;
    console.log(a);
}

function test4() {
    console.log('---test4---')
    let a = 3, b = 5;
    console.log(a | b)//或
    console.log(a & b);//与
    console.log(a ^ b);//异或
    console.log(a ^ b ^ a);//异或自己等于没有
}

test1()
test2()
test3()
test4()