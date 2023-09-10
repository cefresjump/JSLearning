// 创建一个构造函数 Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 为 Person 的原型对象添加一个方法
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// 创建一个构造函数 Student，它继承自 Person
function Student(name, age, studentId) {
    // 使用 call 方法调用父类构造函数，并传递当前对象（this）作为上下文
    Person.call(this, name, age);
    this.studentId = studentId;
}

// 使用 Object.create() 方法将 Student 的原型对象设置为 Person 的实例
Student.prototype = Object.create(Person.prototype);

// 修复 Student 的构造函数属性
Student.prototype.constructor = Student;

// 为 Student 的原型对象添加一个新方法
Student.prototype.study = function () {
    console.log(`${this.name} with student ID ${this.studentId} is studying.`);
}

// 创建一个 Student 实例
const student1 = new Student("Alice", 20, "12345");

// 调用继承自 Person 的方法
student1.sayHello(); // 输出 "Hello, my name is Alice and I am 20 years old."

// 调用 Student 自身的方法
student1.study(); // 输出 "Alice with student ID 12345 is studying."
