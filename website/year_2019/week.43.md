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