# 合并代码；
```
1）git status
2）git branch
3）git checkout master
4）git pull 
5）git checkout 自己分支
6）git pull origin master
```

开发分支dev要上线master分支
```
git checkout dev
git pull 
git chekout master
git merge dev
git push -u origin master
```

当master改变了，同步到本地[与我目前的]
```
git checkout master 
git pull
git chekout dev
git pull origin master
git push -u origin dev
```



```
git commit -m 'commit your branch'
git checkout master
git pull origin master
git checkout your_branch
git rebase master|dev
```

```
git chekout your_branch；
git merge dev #把dev或者master合并到自己的分支上；
```

```
git log查看历史日志
git ^|~<num> 向上查看1个或多个提交；（相对引用很方便）
git branch -f A B, 强制分支指向另一个；
```

```
git重置
git chechkout file|folder 取消本地的某个文件变更；
git reset HEAD~1  忽略最近的一次提交；
git revert 指定分支
```

```
合并分支到一起；
git cherry-pick <提交号1> <提交号2> <提交号3>
git rebase -i HEAD~4


git rebase -i
git commit --amend
git rebase -i
git branch -f master your_branch
```

```
git tag tag_name branch_name
git describe tag_name

git bisect start endsign startSign
git bisect good
git bisect bad
```

```
git rebase master branch1
git rebase branch1 branch2
git rebase branch2 branch3
git -f branch master branch3 | git merge master branch3 

```

```
# 基于master指定次数提交的基础上创建新分支；
git branch -f bugfix master^^2^

show solutions
```

```
远程分支
git clone 
git checkout origin/master;
git commit
git fetch

git pull == git fetch;git merge origin/master

git fakeTeamwork foo 3(模拟队友推送三次提交)
git push
```

```
git fetch;
git rebase origin/master;
git push;
```

```
git fetch
git merge origin/master
git push

git pull --rebase 等同于fetch和rebase
```

```
git reset --hard o/master
git checkout -b feature C2
git push origin feature

```

```
git checkout -b foo o/master ;git pull
git checkout -b foo o/master;git commit;git push;

git branch -u o/master foo;git commit;git push

```

```
区别：
git checkout c0;git push origin master
git checkout c0;git push

```

```
git push origin foo^:master
git push origin master:newBranch

git fetch origin foo;
git fetch origin foo~1:bar

```

```
git pull origin foo
等于git fetch origin foo;git merge o/foo


git pull origin bar~1:bugFix
等于 git fetch origin bar~1：bugFix;git merge bugFix

git pull origin master
```

```
get fetch origin master^:foo
git fetch origin foo:master
git checkout foo
git merge master
```

```
git push origin :foo #删除远端的foo分支
git fetch origin :bar #本地新建一个bar分支

git pull origin master:foo
本地新建foo的分支
从远程仓库的master分支下载提交记录
合并到foo
merge到当前的bar分支上


git pull origin bar:foo
git pull origin master:side

```


```
git clone
git fakeTeamwork
git commit 
git pull --rebase
git push
```

```
git branch feature
git checkout feature
git push origin feature
git branch -f master master^

git checkout -b feature
git push origin feature
```

```
git fetch
git rebase o/master side1
git rebase side1 side2
git rebase side2 side3
git branch -f master side3   # 不好，更推荐使用 git rebase side3 master
git push
```

```
git checkout master
git pull
git merge side1
git merge side2
git merge side3
git push
```


```
git checkout -b side o/master
git commit 
git pull --rebase
git push

```





