# Code Review Developer Guide

## Introduction {#intro}

A code review is a process where someone other than the author(s) of a piece of
code examines that code.

At Google we use code review to maintain the quality of our code and products.

This documentation is the canonical description of Google's code review
processes and policies.


This page is an overview of our code review process. There are two other large
documents that are a part of this guide:

-   **[How To Do A Code Review](reviewer/)**: A detailed guide for code
    reviewers.
-   **[The CL Author's Guide](developer/)**: A detailed guide for developers
    whose CLs are going through review.

# 代码审核人指南

## 简介
代码审核人是指检查一段非本人写的代码的人。
在谷歌用code review提升我们代码或产品质量。
本文是谷歌审核过程和政策的规范描述。

本文是代码审核过程的基本流程。有两个大的文档作为指导：
- 如果进行代码审核：代码审核人权威指南
- CL指南：开发人员写CL的权威指南，贯穿整个审核过程

## What Do Code Reviewers Look For? {#look_for}

Code reviews should look at:

-   **Design**: Is the code well-designed and appropriate for your system?
-   **Functionality**: Does the code behave as the author likely intended? Is
    the way the code behaves good for its users?
-   **Complexity**: Could the code be made simpler? Would another developer be
    able to easily understand and use this code when they come across it in the
    future?
-   **Tests**: Does the code have correct and well-designed automated tests?
-   **Naming**: Did the developer choose clear names for variables, classes,
    methods, etc.?
-   **Comments**: Are the comments clear and useful?
-   **Style**: Does the code follow our
    [style guides](http://google.github.io/styleguide/)?
-   **Documentation**: Did the developer also update relevant documentation?

See **[How To Do A Code Review](reviewer/)** for more information.

## 代码审核人主要关注什么
- 设计：代码是否被良好的设计以及是否适合你的系统？
- 功能：代码功能是否实现了作者最初的目的？代码实现的方式对用户是否友好
- 复杂性：代码是否还能够被简化？其他开发人员是否能容易理解以及将来其他人能否使用这段代码？
- 测试：代码是否正确以及是否通过设计良好的自动测试？
- 命名：开发人员是否清晰地命名了变量、类、方法等？
- 注释：这些注释是否清晰有效？
- 风格：这些代码是否遵从了《style guides》风格？
- 文档：开发人员是否更新了响应额文档？

更多信息查看《如何进行代码审核》

### Picking the Best Reviewers {#best_reviewers}

In general, you want to find the *best* reviewers you can who are capable of
responding to your review within a reasonable period of time.

The best reviewer is the person who will be able to give you the most thorough
and correct review for the piece of code you are writing. This usually means the
owner(s) of the code, who may or may not be the people in the OWNERS file.
Sometimes this means asking different people to review different parts of the
CL.

If you find an ideal reviewer but they are not available, you should at least CC
them on your change.

### 选择最合适的代码审核人

通常，你希望找到最佳的审核人，他能够在合适的时间回应你的审核需求。
最好的审核人是能够给你正在写的代码提供详细准确的反馈。这意味着代码的作者，可能是也可能不是作者之一。有时需要不同的人来审核CL的不同部分。
如果你找到了理想的审核人但他们却不能审核，你应该至少应该将变更抄送给所有人。

### In-Person Reviews {#in_person}

If you pair-programmed a piece of code with somebody who was qualified to do a
good code review on it, then that code is considered reviewed.

You can also do in-person code reviews where the reviewer asks questions and the
developer of the change speaks only when spoken to.

## See Also {#seealso}

-   [How To Do A Code Review](reviewer/): A detailed guide for code reviewers.
-   [The CL Author's Guide](developer/): A detailed guide for developers whose
    CLs are going through review.

### 个人审核
如果你是结对编程，另一个人擅长审核代码，那么代码也被认为审核过了。
你也可以用in-person的方式审核代码，审核人问问题，开发者只回答质疑的部分。