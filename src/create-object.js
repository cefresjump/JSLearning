/*
MDN：Object.create() 静态方法以一个现有对象作为原型，创建一个新对象。
*/
function createObject(proto) {
    // 创建一个空对象
    var obj = {};

    // 将传入的对象设置为新对象的原型
    Object.setPrototypeOf(obj, proto);

    return obj;
}

const test = () => {
    var person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    var newPerson = createObject(person);

    console.log(newPerson.firstName);
    console.log(newPerson.lastName);
    console.log(newPerson.fullName());
}

test()