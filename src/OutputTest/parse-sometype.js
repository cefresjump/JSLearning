/*
parseInt(),parseFloat()是Number的函数功能是将字符串参数转化成对应值
这里介绍一些特殊情况
Number.parseInt(string, radix)
string:要被解析的值，会被强制转化为字符串。字符串开头的空白符将会被忽略。
radix(可选):
2到36之间的整数表示 string 的基数（数学记数系统中的基）。也就是进制数字
如果radix为undefined或0,则radix将被默认设置为10，除非该数字以码元对0x或0X开头，在这种情况下,radix将被默认设置为16。
Number.parseFloat(string)，没有radix，等于全局的parseFloat()

转化时，如果遇到没意义的字符，就停止转化了返回前面的数
*/

function test() {
    console.log(Number.parseInt('0xF'))
    console.log(Number.parseInt('0xFgfe46545', 10))
    console.log(Number.parseFloat('0xFgfe46545'))
    console.log(Number.parseFloat('0.123xFgfe46545'))
    console.log(Number.parseFloat('12.34.56'))
    console.log(Number.parseFloat('x'))
}

test()