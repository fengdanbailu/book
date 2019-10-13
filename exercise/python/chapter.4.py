# !/usr/bin/python
# coding=utf-8
import math
import datetime
from common import ptl

'''
多行注释
multiple explain code
'''
# single explain code
def showCommentFun(a,b):
	"""
	This is the explain code of showCommentFun.
	multiple lines
	"""
	return a+b
ptl()
print(showCommentFun.__doc__)
print(showCommentFun(2,3))
# help(showCommentFun)


def greet(name, greeting="Hello"): 
	"""
	Print a greeting to the user `name`
	Optional parameter `greeting` can change what they're greeted with.
	""" 
	print("{}, {}".format(greeting, name))

ptl()
greet("guoming.chen")

def hello(name, language="en"): 
	""" Say hello to a person.
	:param name: the name of the person
	:type name: str
	:param language: the language in which the person should be greeted
	:type language: str
	:return: a number
	:rtype: int
	"""
	greeting={"en":"Hello","ch":"你好"}
	print(greeting[language]+" "+name) 
	return 4

ptl()
print(hello.__doc__)
hello("chen","ch")
hello("ming")

# 小结
# 1. 学习语言不仅仅是学习语法本身，还有开发工具以及规范，能极大的简化工作流程和提高工作效率。
# 2. 格式化源码pylint引入；自动生成文档sphinx等，都是很好的借鉴
# 3. 谷歌的推荐python格式file:///Users/gmchen/MyProgram/git_devops/mygit/book/exercise/python/chapter.py
# 4. sphinx的一个入门教程 https://pythonhosted.org/an_example_pypi_project/sphinx.html