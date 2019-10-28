function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let user2 = [0,1,2]
// console.log(sayHello(user2));


let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1);
let createdByNewBoolean2: Boolean = new Boolean(1);


let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
    alert('My name is Tom');
}


// 小结
// 1. typyscript支持模板等类型，让javascript也有静态的类型检查