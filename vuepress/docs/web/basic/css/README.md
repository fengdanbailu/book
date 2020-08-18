# CSS
[[toc]]
## HTML5 与 CSS3权威指南
css3没有采用总体结构，而是采用了分工协作的模块化模式；
### 选择器
#### 属性选择器[key=value]
- [key*=value] 包含 value
- [key^=value] 前缀含有 value
- [key$=value] 后缀含有 value

#### 伪类及伪元素选择器
- 伪类：link| visited| hover| active（通过选择器找到那些不存在与 DOM 树中的信息以及不能被常规 CSS选择器获取到的信息）
- 伪元素：first-line| first-letter| before| after
- root | not | empty | target
- first-child | last-child | nth-child | nth-last-child(n|odd|even) | nth-of-type | nth-last-of-type | only-child
- E:hover|E:active|E:focus, E:enable|E:disabled, E:read-only|E:read-write,E:checked|E:default|E:indeterminate, E::selection, E:invalid|E:valid, E:requried|E:optional, E:in-range|E:out-of-range, 
- 兄弟选择器 div ~ p
- 自动编号

``` css
li:nth-child(4n+1){
    background-color:red
}
li:nth-child(4n+2){
    background-color:orange
}
li:nth-child(4n+3){
    background-color:yellow
}
li:nth-child(4n+4){
    background-color:green
}
```

``` css
/* 根据需要也可以组合嵌套 */
h1:before{
    content: counter(mycounter) '. '
}
h1{
    counter-increment:mycounter;
    counter-reset:subcounter;
}

h2:before{
    content: counter(subcounter) '. '
}
h2{
    counter-increment:subcounter;
    margin-left:40px;
}

```

### 文字和字体相关的样式
- text-shadow: 位移x 位移y 模糊半径r 颜色，支持多个阴影
- 自动换行 word-break:normal|keep-all|break-all;   word-wrap:break-word
- 服务器端字体 @font-face
- 修改字体种类而保持字体尺寸不变 font-size-adjust
- rem 相对 html 的高度


``` css
@font-face {
    font-family: WebFont;
    src:url('font/Fontin_Sans_R_45b.otf') fontmat("opentype");
    /* src:local('Arial Black'); */
    font-Weight:normal;
}
h1 {
    font-family:WebFont;
}

```
### 盒相关的样式
- display=inline-block|inline-table|list-item|run-in|compact|block|none
- 表格中的display=table|inline-table|table-row|table-cell|table-row-group|table-header-group|table-footer-group|table-column|table-column-group|table-caption
- overflow=hidden|scroll|auto|visible|
- text-overflow:ellipsis; white-space:nowrap
- box-shadow




