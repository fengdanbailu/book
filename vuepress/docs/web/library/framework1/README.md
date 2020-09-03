# VUE 

## vuex

## vue-router

## vue-cli

### 简介
1. 提供了vue 命令，如 create ui；是构建于 webpack 和 webpack-dev-server 之上的；
2. 提供了 vue-cli-service 的相关命令，如 serve build lint inspect

### nvm 支持多个 node 版本方法
```
brew install nvm
# 根据提示执行
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
# 然后输入 nvm ls-remote 查询测试，出现说明安装完成；

# 然后安装需要的版本 nvm install v10.16.3
# 临时切换版本用 nvm use v8.16.1
# 设定默认版本 nvm alias default v8.16.1
```
### vue常用的几个命令
```
vue serve -o -c -h | --open --copy --help
vue build
vue create（多尝试多实践）
vue ui（多尝试多实践）
vue inspect(获取当前 webpack 配置)
vue lint(检查配置)
```
### vuePlugins
```
resolveFrom：''指定路径，可以引用另一个 package 中的内容；
service 直接访问插件 API 而非直接创建一个完整插件
~/.vuerc 中的配置preset会合并到 vue.config.js 中；
```
### 常用命令vue-cli-service
```
serve 支持 --open --copy --mode --host --port --https
build --mode --dest --modern --target --name --no-clean --report --report-json --watch
lint 
inspect
```
### 打包路径不一致问题
```
只需要在 vue.config.js 中找到并设置publicPath为 '/dist'即可；中间访问不到，主要是因为路由匹配不上导致的；
```
### githook 中的脚本
```
目录位置在.git/hooks
applypatch-msg.sample		pre-push.sample
commit-msg.sample		pre-rebase.sample
fsmonitor-watchman.sample	pre-receive.sample
post-update.sample		prepare-commit-msg.sample
pre-applypatch.sample		update.sample
pre-commit.sample


提交相关的有以下四个：
pre-commit（提交前）
prepare-commit-msg
commit-msg
post-commit

邮件相关的提交有：
applypatch-msg
pre-applypatch
post-applypaych

此外还有applypatch-msg | pre-applypatch | post-applypatch | pre-rebase | post-checkout等等；
```

### vue.config.js
```
publicPath 代替 3.3之前的 baseUrl

```

## elementUI

## antDesign
