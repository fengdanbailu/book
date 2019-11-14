#!/bin/bash
echo "Hello world"
whom_variable="World"

printf "Hello, %s\n" "$whom_variable"
printf "Hello, %s\n" "$1"

#echo "What are you doing?"
#read action
#echo "You are ${action}ing."

# 双引号为弱引用，变量会被替换；
# 单引号为强引用，会原样输出；
# bash -x *.sh 表示输出命令和结果；

deploy=false
uglify=false
echo $#
while (( $# > 1 )); do case $1 in
 --deploy) deploy="$2";;
 --uglify) uglify="$2";;
 *) break;
esac; shift 2
done
$deploy && echo "will deploy... deploy = $deploy"
$uglify && echo "will uglify... uglify = $uglify"
#  chmod +x script.sh
# ./script.sh --deploy true --uglify false