# gitbook
## 从git上初始化
1. 拉去代码 git clone https://github.com/fengdanbailu/book.git
2. 进入文件夹 cd /book/gitbook
3. 初始化 npm install -g gitbook-cli
4. 编辑book.json并安装依赖组件 gitbook install
5. 启动 gitbook serve . --port 4000
6. 打开http://localhost:4000

## 自行手写初始化
1. 初始化 npm install -g gitbook-cli
2. 编辑book.json并安装依赖组件 gitbook install
3. 编辑内容 vim SUMMARY.md as
4. vim SUMMARY.md and write below
``` javascript
* [目录](SUMMARY.md)
* [第一章](book/part1/readme.md)
    * [1.1 常用git命令](book/part1/01常用git命令.md)
    * [1.2 常用网站收藏](book/part1/02常用网站收藏.md)
    * [1.3 减小磁盘空间的方法](book/part1/03减小磁盘空间的方法.md)
    * [1.4 go框架选型](book/part1/04go框架选型.md)
    * [1.5 python虚环境](book/part1/05python虚环境.md)
    * [1.6 tmux](book/part1/06tmux.md)
    * [1.7 nginx小结](book/part1/07nginx小结.md)
    * [1.8 Linux上安装npm](book/part1/08Linux上安装npm.md)
    * [1.9 sublineText插件](book/part1/09sublineText插件.md)
    * [1.10 yarn基本命令](book/part1/10yarn基本命令.md)    
* [第二章](book/part2/readme.md)
* [附录](README.md)
```
5. 启动 gitbook serve . --port 4000
6. 打开http://localhost:4000

## 导出命令
从网站https://calibre-ebook.com下载并安装 calibre，则支持以下命令 ;
注：如果报错，参考[手册](http://gitbook.wiliam.me/ebookandpdf.html)[语法](https://chrisniael.gitbooks.io/gitbook-documentation/content/format/markdown.html)
```
# 生成PDF文件
$ gitbook pdf . mybook.pdf

# 生成ePub文件
$ gitbook epub . mybook.epub

# 生成Mobi文件
$ gitbook mobi . mybook.mobi
```

# vuepress
```
yarn global add vuepress # 安装依赖
yarn # 安装依赖
yarn dev # 启动
yarn build # 编译
```

# docsify
``` 
yarn # 安装依赖
cd docsify # 进入目录
yarn dev # 启动
yarn build # 编译
```

# 比较
- 目前 gitbook 官网已经不维护了，因此更推荐docsify和vuepress；如果需要导出 pdf|epub|mobi 格式，新建一个目录也还可以接受；
- docsify相对而言可配置性更强一些，常规写自己的技术博客vuepress就挺好的，目前主要文档用的 vuepress；gitbook和 docsify 只是 demo;
- docsify 没有直接的 build，但可以在 github 上直接发布，也很方便；三个组件结构类似，相互转化成本也并不高；