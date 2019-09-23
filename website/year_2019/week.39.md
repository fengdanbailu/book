### Monday 2019/09/23
- mongodb
	> [查询语句](http://cw.hubwiz.com/card/c/543b2f3cf86387171814c026/1/1/1/)
	
	> 关键词：find({}) skip(n) count() limit(n)
	
	> 例子：db.getCollection('k8sdeploy').find({}).skip(100).limit(50).count(true)
	
	> db.getCollection('k8sdeploy').find({"pkg_version":{$gte:1100,$lt:1120}}).count(true)
	
	> db.getCollection('k8sdeploy').find({"pkg_version":{$exists:true,$in:[1111,1122]}})
	
	> db.getCollection('k8sdeploy').find({"pkg_version":{$exists:true,$mod:[20,7]}}).count(true)

- git命令
	> git checkout . #本地所有修改的。没有的提交的，都返回到原来的状态
	
	> git stash #把所有没有提交的修改暂存到stash里面。可用git stash pop回复。
	
	> git reset --hard HASH #返回到某个节点，不保留修改。
	
	> git reset --soft HASH #返回到某个节点。保留修改

- mongodb重启
	> 移除进程ID： cd /var/lib/mongo/  rm -fr ./mongod.lock （ /var/run/mongodb/mongod.pid）
	
	> 重启service mongod restart [ /usr/bin/mongod -f /etc/mongod.conf ]
	
	> 查看日志 tail -f /var/log/mongodb/mongod.log

- yarn或npm设置源
	> yarn config get registry
	> yarn config set registry https://registry.npm.taobao.org
	> yarn config set registry https://registry.yarnpkg.com
	
	> npm config get registry 
	> npm config set registry https://registry.npm.taobao.org
