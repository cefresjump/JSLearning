function test1() {
    console.log('test1')
    let num = 0; num += !num || 3;
    console.log(num);
}

function test2() {
    console.log('test2')
    var x, y = 0;
    x = 10;
    y = x++;
    console.log(y);
}

function test3() {
    console.log('test3')
    let [a = 3, b = a, c = b] = [1, 2];
    console.log(a + "," + b + "," + c);
}

function test4() {
    console.log('test4')
    let a = 1 + (1 > 2) ? 1 : 2;
    console.log(a);
}

function test5() {
    console.log('test5')
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
test5()