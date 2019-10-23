## Tuesday 2019/10/23

[磊磊落落的博客](https://leileiluoluo.com)
```
早睡早起（23：00~7：00为睡眠时间）
背单词（要有学习过程，以四六级、考研、托福雅思为目标）
听英文新闻（逐步过渡到不看字幕也能理解）
看新闻联播（早回来的时候听一听，每天了解国内外的基本情况）
全面切换到git上，旧数据逐步迁移过来，每天调整一些；
leetcode等也要不断补充更新
认识异性的过程：过滤基本条件|添加微信手机号|日常沟通交流|持续亲密交往|认识双方的朋友|一起旅行|见双方父母|领证
```

## Tuesday 2019/10/22
### 小木虫
```
小木虫的域名竟然真有hao.muchong.com，两种不同风格的页面链接，也是无语了。
小木虫上传资源帖，上传空间竟然看不到；
翻墙看一些国外网站非常慢，长城网既是保护也是伤害；何时才能人人可以“科学上网”；
今天打开github.com也非常慢，提交一个pr再merge，在页面上就浪费了很长时间。
```
### 日常坚持
```
早睡早起
背单词
听英文新闻
看新闻联播
整理git的个人资料（类似日记）
```


## Monday 2019/10/21
### Tmux
```
安装： brew install tmux
启动：tmux
退出：exit
新建：tmux new -s <session-name>
分离：tmux detach
接入：tmux attach -t <session-name>
杀死：tmux kill-session -t <session-name>
切换：tmux switch -t <session-name>
重命名： tmux rename-session -t <old-session-name> <new-session-name>
```

```
划分窗体：tmux split-window  |  tmux split-window -h
移动光标：tmux select-pane -U|-D|-L|-R
交换窗格：tmux swap-pane  -U|-D|-L|-R

新建窗口：tmux new-window -n <window-name>
切换窗口：tmux select-window -t <window-name>
重命名窗口：tmux rename-window <new-name>

```