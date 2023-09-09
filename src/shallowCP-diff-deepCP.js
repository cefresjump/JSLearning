// 浅拷贝示例
const original = {
    a: 1,
    b: [2, 3],
};

const shallowCopy = Object.assign({}, original);

// 修改原始对象的引用类型属性
original.b.push(4);

console.log(original);      // { a: 1, b: [2, 3, 4] }
console.log(shallowCopy);  // { a: 1, b: [2, 3, 4] }（共享了相同的数组引用）
