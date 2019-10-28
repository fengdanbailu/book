// https://ts.xcatliu.com/introduction/what-is-typescript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
var user2 = [0, 1, 2];
// console.log(sayHello(user2));
var isDone = false;
// let createdByNewBoolean: boolean = new Boolean(1);
var createdByNewBoolean2 = new Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ". I'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    alert('My name is Tom');
}
// 小结
// 1. typyscript支持模板等类型，让javascript也有静态的类型检查
