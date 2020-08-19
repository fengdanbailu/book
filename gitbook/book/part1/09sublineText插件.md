# support markdown
```
1) command + shift + p 弹出快捷窗体；
2）输入package control install  等待缓冲；
3) 输入markdown editing 和markdown preview，安装后重启；
4）preference-->key bingding user 输入如下内容
[
    {"keys": ["alt+m"], "command": "markdown_preview", "args": { "target": "browser"}}
]
5）编辑打开，然后输入alt+m即可；
```

# support sidebar
```
1）搜索SideBarEnhancements并安装；
```

# 修复颜色布局问题
```
参考文档：https://blog.csdn.net/TheMisery_Hang/article/details/80176317
1）Preferences  ->  Package Settings  ->  Markdown Editing  然后分别打开  Markdown GFM Settings - Defaults 和 Markdown GFM Settings - User
2）按如下编辑Markdown GFM Settings - User即可。（可参考Markdown GFM Settings - Defaults）
{
    "draw_centered": false,
    "line_numbers": true
}
```
