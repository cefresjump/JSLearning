/*
链式调用最经典的范例就是Promise，每次调用都返回自身就可以链式调用
*/
function chainNumber(number) {
    this.number = number;
    this.add = (anotherNumber) => {
        this.number += anotherNumber;
        return this;
    }
    this.reduce = (anotherNumber) => {
        this.number -= anotherNumber;
        return this;
    }
}

const test = () => {
    const obj = new chainNumber(1);
    console.log(obj.number);
    obj.add(2)
        .add(3)
        .add(4)
        .reduce(6);
    console.log(obj.number);
}

test()