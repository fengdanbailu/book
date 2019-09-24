# Writing good CL descriptions

A CL description is a public record of **what** change is being made and **why**
it was made. It will become a permanent part of our version control history, and
will possibly be read by hundreds of people other than your reviewers over the
years.

Future developers will search for your CL based on its description. Someone in
the future might be looking for your change because of a faint memory of its
relevance but without the specifics handy. If all the important information is
in the code and not the description, it's going to be a lot harder for them to
locate your CL.
# 写好CL描述

	CL是变更了什么以及为什么变更的一种公开记录。它是版本控制历史的永久的一部分，而且未来几年，不仅reviewers需要阅读，还将有成百上千的人阅读。

	以后开发者会根据描述搜索你的CL。之所以将来有人搜索你的变更，是因为除了具体的代码，其他的关联性都很弱。如果所有的重要信息都在代码里面而没有描述的话，对其他人而言，将很难发现你的CL。

## First Line {#firstline}

*   Short summary of what is being done.
*   Complete sentence, written as though it was an order.
*   Follow by empty line.

The **first line** of a CL description should be a short summary of
*specifically* **what** *is being done by the CL*, followed by a blank line.
This is what most future code searchers will see when they are browsing the
version control history of a piece of code, so this first line should be
informative enough that they don't have to read your CL or its whole description
just to get a general idea of what your CL actually *did*.

By tradition, the first line of a CL description is a complete sentence, written
as though it were an order (an imperative sentence). For example, say
\"**Delete** the FizzBuzz RPC and **replace** it with the new system." instead
of \"**Deleting** the FizzBuzz RPC and **replacing** it with the new system."
You don't have to write the rest of the description as an imperative sentence,
though.

## 第一行

*   对已经完成的功能写一份简短的总结
*   用完整的句子，就像一条命令那样写
*   用空行隔开

	CL的第一行是一个即将做了什么的概要，接下来是一个空行。这是将来大多数人，搜索一段代码版本历史后看到的，所以第一行应该有足够的信息让他们不用读整个CL就能得知你的CL主要做了什么的思路。
	通常，CL的第一行是一个完整的句子，就好像一条命令一样。例如，用“Delete FizzBuzzz RPC and replace it with the new system.” 代替 “Deleting the FizzBuzz RPC and replacing it with the new system.” 你也不必增加形容词句子来写剩下的描述。

## Body is Informative {#informative}

The rest of the description should be informative. It might include a brief
description of the problem that's being solved, and why this is the best
approach. If there are any shortcomings to the approach, they should be
mentioned. If relevant, include background information such as bug numbers,
benchmark results, and links to design documents.

Even small CLs deserve a little attention to detail. Put the CL in context.

## 主体要有详情

	描述的剩余部分要有详情。包括但不限于已解决问题的描述、为什么这种方法解决问题最合适。如果有该方法有缺点，也应该提及到。如果与问题相关，也可以有一些背景信息，比如错误行号、基本结果以及设计文档的链接等。
	即使是小的CL也应该关注详情细节，把CL放到上下文（来思考）。

## Bad CL Descriptions {#bad}

"Fix bug" is an inadequate CL description. What bug? What did you do to fix it?
Other similarly bad descriptions include:

-   "Fix build."
-   "Add patch."
-   "Moving code from A to B."
-   "Phase 1."
-   "Add convenience functions."
-   "kill weird URLs."

Some of those are real CL descriptions. Their authors may believe they are
providing useful information, but they are not serving the purpose of a CL
description.

## 不好的CL举例

"Fix bug" 是信息不足的CL描述。什么bug, 你为了修复这个bug做了什么？其他类似的不好的描述如下：

-   "Fix build."
-   "Add patch."
-   "Moving code from A to B."
-   "Phase 1."
-   "Add convenience functions."
-   "kill weird URLs."

## Good CL Descriptions {#good}

Here are some examples of good descriptions.

## 推荐CL的写法

这里有一些推荐的描述例子。

### Functionality change

> rpc: remove size limit on RPC server message freelist.
>
> Servers like FizzBuzz have very large messages and would benefit from reuse.
> Make the freelist larger, and add a goroutine that frees the freelist entries
> slowly over time, so that idle servers eventually release all freelist
> entries.

The first few words describe what the CL actually does. The rest of the
description talks about the problem being solved, why this is a good solution,
and a bit more information about the specific implementation.

### 功能变更

> RPC:移除RPC服务信息空闲列表的大小限制；
>  
> 像FizzBuzz服务有大量信息，有助于复用。空闲列表设置较大并增加可以超时后缓慢释放空闲列表的并发，可以让的卡住的机器最终释放全部空闲列表。

第一行的几个单词描述了CL实际做了什么。其余的信息解释了，对这个问题而言，为什么这是一个好的解决方法；比外，给了一点具体实现的描述信息。

### Refactoring

> Construct a Task with a TimeKeeper to use its TimeStr and Now methods.
>
> Add a Now method to Task, so the borglet() getter method can be removed (which
> was only used by OOMCandidate to call borglet's Now method). This replaces the
> methods on Borglet that delegate to a TimeKeeper.
>
> Allowing Tasks to supply Now is a step toward eliminating the dependency on
> Borglet. Eventually, collaborators that depend on getting Now from the Task
> should be changed to use a TimeKeeper directly, but this has been an
> accommodation to refactoring in small steps.
>
> Continuing the long-range goal of refactoring the Borglet Hierarchy.

The first line describes what the CL does and how this is a change from the
past. The rest of the description talks about the specific implementation, the
context of the CL, that the solution isn't ideal, and possible future direction.
It also explains *why* this change is being made.

### 重构

> 用TimeKeeper重建一个任务，目的是用TimeStr和Now方法；
> 给Task类增加一个新的方法，所以borglet的get方法可以移除了（borglet只是被OOMCandiate用来调用borglet的当前时间）。替代borglet后的方法将代理一个TimeKeeper。
>  
> 允许任务提供Now方法是消除对Borglet依赖的第一步。最终，所有依赖Now方法的协作者都将变更为直接使用TimeKeeper，但这需要一小步一小步的重构该过程。
>  
> 持续重构的长远目标是让Borglet分层；

### Small CL that needs some context

> Create a Python3 build rule for status.py.
>
> This allows consumers who are already using this as in Python3 to depend on a
> rule that is next to the original status build rule instead of somewhere in
> their own tree. It encourages new consumers to use Python3 if they can,
> instead of Python2, and significantly simplifies some automated build file
> refactoring tools being worked on currently.

The first sentence describes what's actually being done. The rest of the
description explains *why* the change is being made and gives the reviewer a lot
of context.

## Review the description before submitting the CL

CLs can undergo significant change during review. It can be worthwhile to review
a CL description before submitting the CL, to ensure that the description still
reflects what the CL does.

### 小CL也需要有上下文

> 为status.py创建一个python3版本的构建规则
>  
> 变更可以让当前用户在python3版本上只依赖原始状态构建规则来代替树。鼓励新用户尽可能的使用python3代替python2,并且显著的简化当前重构工具来自动构建文件。

CLs可以在review期间过一下有意义的变更。对于提交CL之前，review CL很有意义，特别是对于保证描述反应CL实际做的事情。

Next: [Small CLs](small-cls.md)
