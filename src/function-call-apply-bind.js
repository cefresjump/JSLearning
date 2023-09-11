Function.prototype.myCall = function (base, ...args) {
    // 1. 如果指向是null 或者undefined 则指向window
    base = base || window
    // 2. 根据this是谁调用就指向谁的原理，将this指向的函数 赋值给base对象的一个属性
    base.fn = this
    // 3.执行函数,调用base.fn时，fn中的函数指向 base对象
    let result = base.fn(...args)
    // 4. 删除base的fn属性
    delete base.fn
    // 5. 返回result 结果
    return result
}

Function.prototype.myApply = function (base, args) {
    // 1. 如果指向是null 或者undefined 则指向window
    base = base || window
    // 2. 根据this是谁调用就指向谁的原理，将this指向的函数 赋值给base对象的一个属性
    base.fn = this
    // 3.执行函数,调用base.fn时，fn中的函数指向 base对象
    let result = base.fn(...args)
    // 4. 删除base的fn属性
    delete base.fn
    // 5. 返回result 结果
    return result
}


Function.prototype.myBind = function (base, ...args1) {
    return (...args2) => {
        // 1. 如果指向是null 或者undefined 则指向window
        base = base || window;
        // 2. 根据this是谁调用就指向谁的原理，将this指向的函数 赋值给base对象的一个属性
        base.fn = this;
        // 3.执行函数,调用base.fn时，fn中的函数指向 base对象
        let result = base.fn(...args1, ...args2);
        // 4. 删除base的fn属性
        delete base.fn;
        // 5. 返回result 结果
        return result;
    };
};

const test = () => {
    function greet(name1, name2) {
        console.log(`${this.name}:Hello, ${name1} and ${name2}!`);
    }

    const person = { name: 'Alice' };

    greet.myApply(person, ['Bob', 'John']);
    greet.myCall(person, 'Bob', 'John')
    const bindGreet = greet.myBind(person, 'Bob');
    bindGreet('John')
}

test()