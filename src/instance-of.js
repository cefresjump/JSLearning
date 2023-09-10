/*
MDN：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
*/
function myInstanceof(left, right) {
    let proto = left.prototype, // 获取对象的原型
        prototype = right.prototype; // 获取构造函数的 prototype 对象

    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = proto.prototype;
    }
}

const test = () => {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.sayHello = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    function Student(name, age, studentId) {
        Person.call(this, name, age);
        this.studentId = studentId;
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    Student.prototype.study = function () {
        console.log(`${this.name} with student ID ${this.studentId} is studying.`);
    }

    const person1 = new Person("An", 12);
    const student1 = new Student("Serena", 16, 1);

    console.log(person1 instanceof Object);
    console.log(person1 instanceof Person);
    console.log(person1 instanceof Student);

    console.log(student1 instanceof Object);
    console.log(student1 instanceof Person);
    console.log(student1 instanceof Student);
}

test()