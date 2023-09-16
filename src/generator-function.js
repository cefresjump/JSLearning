/*
JavaScript生成器函数（Generator Functions）是一种特殊的JavaScript函数，
它们允许你在需要时生成多个值，
而不是一次性生成所有值并将它们存储在内存中。
这使得它们非常适用于处理大量数据、异步编程和迭代操作。
生成器函数使用关键字function*来定义，并包含yield语句用于产生值。
*/
const test1 = () => {
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    var g = gen();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log('test1 end');
}

const test2 = () => {
    function* gen() {
        while (true) {
            var value = yield value;
            console.log(value);
        }
    }

    var g = gen();
    console.log(g.next(1));
    console.log(g.next(2));
    console.log(g.next(1));
    console.log('test2 end');
}

const test3 = () => {
    function* anotherGenerator(i) {
        yield i + 1;
        yield i + 2;
        yield i + 3;
    }

    function* generator(i) {
        yield i;
        yield* anotherGenerator(i); // 移交执行权
        yield i + 10;
    }

    var gen = generator(10);

    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log('test3 end');
}

test1();
test2();
test3();