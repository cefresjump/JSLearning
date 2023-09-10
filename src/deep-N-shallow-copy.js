/*
浅拷贝的原理很简单，它仅复制了原始对象的属性和属性值，而不会递归复制属性的内容。具体来说，浅拷贝的原理可以概括如下：
1. 创建一个新的目标对象（拷贝对象）。
2. 遍历原始对象的所有可枚举属性。
3. 对于每个属性，将属性名和属性值复制到目标对象中。

浅拷贝的关键在于第三步，它是通过引用复制而不是值复制来实现的。
这意味着浅拷贝只会复制原始对象属性的引用，而不会创建属性值的独立副本。
因此，如果原始对象的属性是基本数据类型（如数字、字符串、布尔值等），那么浅拷贝会创建这些属性的独立副本，
因为基本数据类型的值是不可变的。
但如果原始对象的属性是对象或数组等引用类型，浅拷贝只会复制它们的引用，
这意味着拷贝后的对象和原始对象仍然共享相同的子对象。

这就是为什么浅拷贝在处理嵌套对象时需要格外小心，因为对拷贝后的对象或原始对象中的嵌套对象进行修改都会影响到另一个对象，
因为它们共享相同的子对象引用。
如果需要创建一个完全独立的副本，包括嵌套对象，那么需要使用深拷贝方法，递归复制所有嵌套对象的内容。
*/
function deepCopy(target) {
    if (target === null || typeof target !== 'object') {
        return target;
    }

    if (Array.isArray(target)) {
        let copy = [];
        for (let i = 0; i < target.length; i++) {
            copy[i] = deepCopy(target[i]);
        }
        return copy;
    }

    let copy = {};
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            copy[key] = deepCopy(target[key]);
        }
    }
    return copy;
}

function shallowCopy(target) {
    if (target === null || typeof target !== 'object') {
        return target;
    }

    if (Array.isArray(target)) {
        let copy = [];
        for (let i = 0; i < target.length; i++) {
            copy[i] = target[i];
        }
        return copy;
    }

    let copy = {};
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            copy[key] = target[key];
        }
    }
    return copy;
}

const test = () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = shallowCopy(obj1);
    const obj3 = deepCopy(obj1);
    obj1.b.d = 100;
    console.log(obj1)
    console.log(obj2)
    console.log(obj3)
}

test();