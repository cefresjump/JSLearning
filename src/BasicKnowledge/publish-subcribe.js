/*
发布-订阅模式（Publish-Subscribe Pattern），也被称为观察者模式（Observer Pattern），是一种软件设计模式，用于处理对象之间的松散耦合关系。
这个模式允许一个对象（发布者或主题）将其状态的变化通知给多个对象（订阅者或观察者），而这些订阅者不需要知道发布者的具体实现细节。
这种模式通常用于事件处理、数据通知和交互组件之间的通信。

以下是发布-订阅模式的关键组成部分：
1. 发布者（Publisher）：也称为主题（Subject），是生成事件或状态变化的对象。发布者维护一个订阅者列表并负责通知订阅者有关状态变化的信息。
2. 订阅者（Subscriber）：也称为观察者（Observer），是感兴趣发布者状态变化的对象。订阅者向发布者注册自己，以便在状态变化时接收通知。
3. 订阅（Subscribe）：订阅者通过订阅方法向发布者注册自己，以便在发布者状态变化时接收通知。
4. 取消订阅（Unsubscribe）：订阅者可以随时取消对发布者的订阅，以停止接收通知。
5. 发布事件（Publish）：发布者通常提供一个方法，用于触发事件或通知所有订阅者关于状态变化的信息。
6. 通知（Notify）：当发布者状态变化时，它会遍历其订阅者列表并调用每个订阅者的回调函数，以将状态变化的信息传递给它们。

发布-订阅模式的好处包括：
- 松散耦合：发布者和订阅者之间的关系是松散的，它们不直接依赖于彼此的实现，从而使系统更易于扩展和维护。
- 灵活性：可以轻松添加或删除订阅者，而不需要修改发布者的代码。
- 异步通信：订阅者可以异步处理通知，从而提高了系统的性能和响应性。
- 解耦业务逻辑：发布-订阅模式允许将业务逻辑分割成独立的组件，每个组件只需要关注自己感兴趣的状态变化。
*/
function Publisher(name) {
    this.subscribers = [];
    this.name = name;

    this.getSubscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    }

    this.publish = function (text) {
        this.subscribers.forEach((subscriber) => { subscriber.getNotify(text) });
    }
}

function Subscriber(name) {
    this.name = name;

    this.subscribe = function (publisher) {
        publisher.getSubscribe(this)
        console.log(this.name + " just subscribe " + publisher.name);
    }

    this.getNotify = function (text) {
        console.log(`${this.name} get message "${text}"`);
    }
}

const test = () => {
    const publisher1 = new Publisher("publisher1");
    const publisher2 = new Publisher("publisher2");

    const subscriber1 = new Subscriber("subscriber1");
    const subscriber2 = new Subscriber("subscriber2");
    const subscriber3 = new Subscriber("subscriber3");

    subscriber1.subscribe(publisher1);
    subscriber1.subscribe(publisher2);

    subscriber2.subscribe(publisher1);

    subscriber3.subscribe(publisher2);

    publisher1.publish("Hello");
    publisher2.publish("Hi");
}

test()