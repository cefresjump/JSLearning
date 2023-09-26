/*
MDN：
1.创建一个空白的、纯JavaScript对象。为了方便起见，我们称之为 newInstance.
2.如果prototype是一个Object,将newInstance的[[Prototype]]指向构造函数的prototype属性
否则，newInstance保持为普通对象 Object.prototype作为它的[[Prototype]]。
注意：添加到构造函数的属性/对象 prototype因此，从构造函数创建的所有实例都可以访问属性。
3.使用给定参数执行构造函数，绑定 newInstance作为 this上下文（即所有引用 this现在在构造函数中引用 newInstance).
4.如果构造函数返回一个非原始类型，则该返回值将成为new表达式的结果。否则，如果构造函数不返回任何内容或返回原始类型，则返回newInstance。
（通常构造函数不返回值，但它们可以选择这样做来覆盖正常的对象创建过程。）
*/

function myNew(constructor, ...args) {
    let instance = {};
    //instance.__proto__ = constructor.prototype 已经不推荐使用
    Object.setPrototypeOf(instance, constructor.prototype);
    const result = constructor.apply(instance, args);
    return (typeof result === 'object' && result !== null) ? result : instance;
}

const test = () => {
    //这个构造函数不返回对象，所以返回instance
    function Person(name) {
        this.name = name;
    }

    function weridPerson(name) {
        this.name = name;
        return {
            name: '???'
        }
    }
    const obj1 = myNew(Person, "Alice");
    const obj2 = new weridPerson('John');
    console.log(obj1);
    console.log(obj2);
}

test()