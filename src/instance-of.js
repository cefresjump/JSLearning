/*
MDN：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
*/
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);

    while (true) {
        if (!proto) return false;
        if (proto === right.prototype) return true;

        proto = Object.getPrototypeOf(proto);
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

    console.log(myInstanceof(person1, Object));
    console.log(myInstanceof(person1, Person));
    console.log(myInstanceof(person1, Student));

    console.log(myInstanceof(student1, Object));
    console.log(myInstanceof(student1, Person));
    console.log(myInstanceof(student1, Student));
}

test()