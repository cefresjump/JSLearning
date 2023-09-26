/*
toString:返回一个表示该对象的字符串。
valueOf:将this值转换成对象。
这些方法都旨在被派生对象重写，以实现自定义类型转换逻辑。
也就是说，部分类型的这种函数的实现可能不一样
请注意不同类型重写的方式
绝大部分重写符合直觉，除了array
*/
function test() {
    const a = { name: 'bob' };
    const b = function functionB() { };
    const c = [1, 2, 3]
    const d = new Date()
    const e = false;
    const f = 1;

    //object最初始的方法
    console.log('---object---')
    console.log(a.valueOf())
    console.log(a.toString())
    console.log('---function---')
    console.log(b.valueOf()) //没有被重写
    console.log(b.toString()) //被重写
    console.log('---array---')
    console.log(c.valueOf()) //没有被重写
    console.log(c.toString()) //被重写
    console.log('---date---')
    console.log(d.valueOf()) //被重写
    console.log(d.toString()) //被重写
    console.log('---boolean---')
    console.log(e.valueOf()) //被重写
    console.log(e.toString()) //被重写
    console.log('---number---')
    console.log(f.valueOf()) //被重写
    console.log(f.toString()) //被重写
}

test()