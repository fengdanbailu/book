### 从git上初始化

1. 拉去代码 git clone https://github.com/fengdanbailu/book.git
1. 初始化 npm install -g gitbook-cli
1. 启动 gitbook serve ./book/website
1. 打开http://localhost:4000

### 自行手写初始化
1. 初始化 npm install -g gitbook-cli
1. 查看版本 gitbook -V
1. 编辑内容 vim SUMMARY.md as
1. vim SUMMARY.md and write below

``` javascript
	* [前言](book/README.md)
	* [第一章](book/part.1/1.0.md)
		- [1.1](book/part.1/1.1.md)
		- [1.2](book/part.1/1.2.md)
	* [第二章](book/part.2/2.0.md)
		- [2.1](book/part.2/2.1.md)
		- [2.2](book/part.2/2.2.md)
		- [2.3](book/part.2/2.3.md)
	* [附录](README.md)
```
1. 启动 gitbook serve .
1. 打开http://localhost:4000


### 导出命令

> 生成PDF文件

> $ gitbook pdf . mybook.pdf

> 生成ePub文件

> $ gitbook epub . mybook.epub

> 生成Mobi文件

> $ gitbook mobi . mybook.mobi

注：如果报错，参考[手册](http://gitbook.wiliam.me/ebookandpdf.html)