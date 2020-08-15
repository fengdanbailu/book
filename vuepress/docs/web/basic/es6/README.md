# ES6
## let 与 const
- let 是局部变量，相比var，不允许重复声明，不存在变量提升，只在单独子作用域生效；
- let 只有就有暂时性死区的概念，typeof 不再是 100%安全的操作；
- 对于 ES6 浏览器为了避免兼容问题，可以有自己的方式：允许在块级作用域内声明函数；函数声明类似与 var，即会提升到全局作用域或函数作用域的头部；函数声明还会提升到所在的块级作用域的头部；
- 建议块级作用域写函数时，优先使用变量声明的方式；
- const 是常量，一旦赋值就不能更改（实质是地址不能改）；
- 真正想冻结可以使用 Object.freeze函数；
### globalThis 对象
为了统一环境（浏览器，node,严格模式），引入 globalThis 的概念
```
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```
## 解构
