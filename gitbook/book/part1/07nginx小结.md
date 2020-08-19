```
英文文档：http://nginx.org/en/docs/
中文文档：https://www.nginx.cn/doc/
```

```
ufe测试环境
/usr/local/nginx/logs/error.log
/usr/local/nginx/conf/nginx.conf
/usr/local/nginx/logs/nginx.pid
/var/log/ufe/access.log
/home/wwwlogs/nginx_error.log

dbtest.cluster-ro-cy8y0bukh6dv.us-west-2.rds.amazonaws.com
dbtest.cluster-cy8y0bukh6dv.us-west-2.rds.amazonaws.com
```

```
积累：
1）非root用户智能启动1024以上的端口；
2）nginx -t 测试；nginx -v查看版本；nginx -V查看详情；
3) 默认proxy_set_header Host $proxy_host;
```

```
从容停止 kill -QUIT nginx 主进程号
快速停止 kill -TERM nginx 主进程号
强制停止 kill -9 nginx 主进程号
```

# Nginx的优点
```
优点：
1）并发数高，支撑5万并发连接，实际可以有2-4万并发连接数；
2）成本低廉；
```

# Nginx的自动安装
```
brew install nginx
```

# Nginx没有rotate日志，可以采用如下方式
```
mv /data/logs/access.log /data/logs/access-20200612.log
kill -USE1 `cat /usr/local/webserver/nginx/nginx.pid`
或者借助crontab
#!/bin/bash
logs_path="/data/logs"
mkdir -p $logs_path)/$(date -d "yesterday" + "%Y")/ $(date -d 'yesterday' +'%m')/
mv $logs_path)/accesss.log $logs_path)/$(date -d "yesterday" + "%Y")/ $(date -d 'yesterday' +'%m')/access_$(date -d 'yesterday' +'%Y%m%d').log
kill -USER1 `cat /usr/local/webserver/nginx/nginx.pid`
# 上面针对linux的，mac系统不太一样
date -v-1d +"%Y%m%d %H%M%S"
```

```
#启动crontab 
00 00 * * * /bin/bash /usr/local/nginx/myginx_log.sh
```

# 关于缓存
```
proxy_cache
location ~ .*\.(php|php5)$
{
    fastcgi_cache cache_one;
    fastcgi_cache_valid 200 10m;
    fastcgi_cache_valid 301 302 1h;
    fastcgi_cache_valid any 1m;
}
```

# 主模块指令
```
try_files指令
按照顺序检查文件是否存在，按顺序检查；
例如
location / {
    try_files /system/index.html $uri $uri/index.html $uri.html @mylocation
}
location @mylocation{
    proxy_pass http://mynewlocation;
}

location指令
~* 表示不区分大小写的匹配（优先字符串匹配）
~  表示区分大小写的匹配
^~ 表示禁止匹配
=  表示进准匹配
默认表示前缀匹配，但正则表达式和较长子串被优先匹配

# allow deny指令，可以只允许或者拒绝访问；
默认从上到下匹配，匹配一个就结束；

#goe指令
geo $country{
    ranges;
    default
    127.0.0.0~127.0.0.0 no;
    127.0.0.1~127.0.0.1 us;
    127.0.0.2~127.0.0.2 ru;
}

# gzip on 
```

#主模块变量
```
$nginx_version #nginx的版本；
$pid #nginx的进程号；
#realpath_root # Root目录的绝对路径；

```










