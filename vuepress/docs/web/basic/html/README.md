# HTML

### BASE
\<base>标签指定网页内部所有相对 URL 的计算基准。整张网页只能有一个标签；且只能放在\<head>里面，使用时无闭合标签，如：
```
<head>
    <base href="https://127.0.0.1/vuepress/" target="_blank">
</head>
```

### tabindex
网页通常使用鼠标操作，但是某些情况下，用户可能希望使用键盘，或者只有键盘可以用。因此，浏览器允许使用 Tab 键，遍历网页元素。也就是说，只要不停按下 Tab 键，网页的焦点就会从一个元素转移到另一个元素，选定焦点元素以后，就可以进行下一步操作，比如按下回车键访问某个链接，或者直接在某个输入框输入文字；推荐都设置为 0。
负整数，可以获得焦点，如 javascript的 focus；
0，该元素参与 tab 键的遍历，顺序有浏览器指定，通常为初选顺序；
正整数，网页按照大小顺序参与 tab 键的遍历，如果相同，则按源码顺序进行遍历
```
<p tabindex="0">这段文字可以获得焦点</p>
```

### accesskey
accesskey 属性指定网页元素获得焦点的快捷键，因此属性值必须是可打印字符，例如：
```
<button accesskey="s>提交</button>
```

### contenteditable
HTML 网页的内容默认是用户不能编辑，contenteditable允许用户编辑。
```
<p contenteditable="true">
鼠标点击，本句内容可修改。
</p>
```

### spellcheck
浏览器一般会自带拼写检查功能，编辑内容时，拼错的单词下面会显示红色的波浪线。spellcheck属性就表示，是否打开拼写检查。注意，改属性只在编辑时生效
```
<p contenteditable="true" spellcheck="true">
英语单词 separate 容易写错成 seperate。
</p>
```

### \<mark>
\<mark>是一个行内标签，表示突出显示的内容。chrome 浏览器默认会以亮黄色北京，显示该标签的内容。

### 常用标签
- \<header>
- \<footer>
- \<main>
- \<article>
- \<aside>
- \<section>
- \<nav>
- \<h1>..\<h6>
- \<hgroup>

### 列表
ul无序; ol 有序，支持 reversed 和 start 、type等；
reversed 是倒序，start 是有序列表的 起始标志，type 是编码方式，显示大小写字母、罗马数字或者整数；
```
<ol reversed>
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

```
<ol start="5">
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

### dl dt dd
分层次的标签，例如：
```
<dl>
  <dt>CPU</dt>
  <dd>中央处理器</dd>

  <dt>Memory</dt>
  <dd>内存</dd>

  <dt>Hard Disk</dt>
  <dd>硬盘</dd>

</dl>
```

### figure figcaption
图像和相关信息封装在一起的方法

```
<figure>
  <img src="https://example.com/foo.jpg">
  <figcaption>示例图片</figcaption>
</figure>
```

### srcset
srcset属性用来指定多张图像，适应不同像素密度的屏幕。它的值是一个逗号分隔的字符串，每个部分都是一张图像的 URL，后面接一个空格，然后是像素密度的描述符。比如：
```
<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">
```

### picture 响应式
```
<picture>
  <source media="(max-width: 500px)" srcset="cat-vertical.jpg">
  <source media="(min-width: 501px)" srcset="cat-horizontal.jpg">
  <img src="cat.jpg" alt="cat">
</picture>
```

### a 标签
加上 download 可以变成下载链接；
mailto 可以写邮件，还能带参数，比如 subject, cc, bcc, body 等等；
href="tel:188****1234"还可以连接到电话；
例如：
```
<a href="mailto:contact@example.com">联系我们</a>

<a href="mailto:foo@bar.com?cc=test@test.com&subject=The%20subject&body=The%20body">发送邮件</a>

```

### link 
type 属性
可以配合type="module"及 nomodule 使用
```
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```
integrity 属性
引用外部脚本时，可以增加 hash 值，防止外部脚本变动

rel 属性
alternate：文档的另一种表现形式的链接，比如打印版。
author：文档作者的链接。
dns-prefetch：要求浏览器提前执行指定网址的 DNS 查询。
help：帮助文档的链接。
icon：加载文档的图标文件。
license：许可证链接。
next：系列文档下一篇的链接。
pingback：接收当前文档 pingback 请求的网址。
preconnect：要求浏览器提前与给定服务器，建立 HTTP 连接。
prefetch：要求浏览器提前下载并缓存指定资源，供下一个页面使用。它的优先级较低，浏览器可以不下载。
preload：要求浏览器提前下载并缓存指定资源，当前页面稍后就会用到。它的优先级较高，浏览器必须立即下载。
prerender：要求浏览器提前渲染指定链接。这样的话，用户稍后打开该链接，就会立刻显示，感觉非常快。
prev：表示当前文档是系列文档的一篇，这里给出上一篇文档的链接。
search：提供当前网页的搜索链接。
stylesheet：加载一张样式表。

```
<!-- 作者信息 -->
<link rel="author" href="humans.txt">

<!-- 版权信息 -->
<link rel="license" href="copyright.html">

<!-- 另一个语言的版本 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- 联系方式 -->
<link rel="me" href="https://google.com/profiles/someone" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- 历史资料 -->
<link rel="archives" href="http://example.com/archives/">

<!-- 目录 -->
<link rel="index" href="http://example.com/article/">

<!-- 导航 -->
<link rel="first" href="http://example.com/article/">
<link rel="last" href="http://example.com/article/?page=42">
<link rel="prev" href="http://example.com/article/?page=1">
<link rel="next" href="http://example.com/article/?page=3">
```

### details & summary
用于折叠内容
```
<details>
  <summary>这是标题</summary>
  这是一段解释文本。
</details>
```