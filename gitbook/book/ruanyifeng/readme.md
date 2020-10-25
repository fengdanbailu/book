# 阮一峰博客


- 资源来源：https://github.com/ruanyf/weekly.git
- 由于博客http://www.ruanyifeng.com/blog/挂了（2020.10.25），还想看看这周五的更新，于是拿来源码自己本地起一下服务。
- 具体步骤：
1）把doc文件重命名为ruanyifeng，然后再自己的目录文件summary.md加上目录;
2）增加本文件readme.md文件
3）可借用如下脚本在刘嫌弃的console中进行；
``` js
const END=130;
let str="";
for(let i=END;i>0;i--){
str+="    * [第"+i+"期](book/ruanyifeng/issue-"+i+".md)\n";
}
console.log(str)
```



