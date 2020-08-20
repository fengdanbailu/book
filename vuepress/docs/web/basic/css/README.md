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
- box-sizing=content-box|padding-box|border-box
  
### 背景与边框相关样式
- 背景：background-origin=border|padding|content, bakcground-clip=border|padding|content(内部的图像不显示),background-size=40px 20px|contain|cover|, background-repeat=space|round|no-repeat|repeat|repeat-x|repeat-y
- 渐变色：linear-gradient(direction,color1 0%,color2 100%); radial-gradient(circle at center top,color1 0%,color2 100%);
- radial-gradient的参数为( )closest-size|farthest-side|farthest-corner
- border-radius=border-top-left-radius|border-top-right-radius|border-bottom-right-radius|border-bottom-left-radius, border-image=url() A B C D/10px repeat stretch;
  
``` css
    .spcial1-div {
        background:linear-gradient(to bottom,orange,black)
    }
    .spcial2-div {
        /* background:radial-gradient(at 20px 30px,orange,black) */
        background:radial-gradient(ellipse closest-size at 20px 30px,orange,black)
    }
```

### CSS3中的变形处理（旋转、缩放、倾斜，移动 ）
- transform:rotate(45deg)，scale(0.5,2),transform:skew(30deg,30deg)；transform:translate(50px,50px); 
- transform:rotateX,rotateY,rotateZ，
- matrix;matrix3d

``` css
/* 可以同时做多种变换操作 */
div{
    transform translate(150px,200px) rotate(45deg) scaale(1.5)；
}
```

### CSS中的动画动能 
-  transition:property duration timing-function delay
-  animation:name duration timing-function delay，iteration-count direction=normal|alternate|reverse|alternate-reverse
- 

``` css 
div{
    background-color:#ffff00;
    transition:background-color is linear;
}
div :hover{
    background-color:#0000FF
}

div2{
    background-color:#ffff00;
}
@keyframes mycolor{
    0%{
        background-color:red;
        /* transform:rotate(90deg); */
    }
    40%{
        background-color:darkblue;
    }
    70%{
        background-color:yellow;
    }
    100%{
        background-color:red;
    }
}
div2 :hover{
    animation-name:mycolor;
    animation-duration:5s;
    animation-timing-function:linear;
    animation-delay:0.5s;
    animation-iteration-count:20;
}
```

### 布局相关样式
- 分栏：column-count| column-width| column-gap| column-rule
- display:box|-moz-box|-webkit-box
- display:flex, flex:1,order:1, flex-direction=row|row-reverse|column|column-reverse



``` css
#div1{
    column-count:2;
    -moz-column-count:2;
    -webkit-column-count:2;
    column-width:20em;
    -moz-column-width:20em;
    -webkit-column-width:2em;
    column-gap:3em;
    -moz-column-gap:3em;
    -webkit-column-gap:3em;
    column-rule:1px solid red;
    -moz-column-rule:1px solid red;
    -webkit-column-rule:1px solid red;
}
```

``` css
#container{
    display:flex;
}
#left-sidebar{
    order:3;
    width:200px;
    padding:20px;
    background-color:oragne;
}
#contains{
    order:1;
    flex:1;
    padding:20px;
    background-color:yellow;
}
#right-sidebar{
    order:2;
    width:200px;
    padding:20px;
    background-color:limegreen;
}
#left-sidebar,#contains,#right-sidebar{
    box-sizing:border-box;
}
```