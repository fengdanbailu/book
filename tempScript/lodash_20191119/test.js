const _ = require('lodash');

// lodash 的整个源码都应该阅读以下,写的比较通俗易懂;
// 熟练使用常用的几个函数

function test1(){
	let a = _.chunk(['a', 'b', 'c', 'd'], 2);
	console.log(a);
}

function test2(){
	let a = _.compact([0, 1, false, 2, '', 3]);
	console.log(a);
}

function test3(){
	let a = _.compact([0, 1, false, 2, '', 3]);
	console.log(a);
}

// 有些代码比较好理解,只是多一些更严格的校验，但像difference等函数感觉很费解。
test3()


