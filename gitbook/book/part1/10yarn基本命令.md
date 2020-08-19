```
1）安装 brew install yarn | brew uprade yarn
2）版本yarn -verson
3）初始化yarn init  
4）添加
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
5）修改
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
6）移除
yarn remove [package]

7）yarn init 生成package.json文件

8）设置yarn的镜像
yarn config set registry https://registry.npm.taobao.org (原https://registry.yarnpkg.com)
类似的 npm  set registry https://registry.npm.taobao.org 
9）设置yarn的sass二进制源
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass
类似的 npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass

10）查看当前源
yarn config get registry

11)下载electron总是超时，改成国内镜像还不够，还需要编辑~/.yarnrc，加入下面一行，才能正常下载下来；
 electron_mirror "https://npm.taobao.org/mirrors/electron/"
```