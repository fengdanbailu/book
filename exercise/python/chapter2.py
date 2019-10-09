# !/usr/bin/python
# coding=utf-8
import math
import datetime
from common import ptl

a_str = 'Hello World'
print(a_str) #output will be whole string. Hello World 
print(a_str[0]) #output will be first character. H 
print(a_str[0:5]) #output will be first five characters. Hello

# set
ptl()
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'} 
print(basket)
print(set(basket))

a=set("Hello world")
print(a)
a.add('x')
a.add('y')
a.add('z')
print(a)

b = frozenset('asdfagsa')
print(b)
# b.add('z')
# print(b)
cities = frozenset(["Frankfurt", "Basel","Freiburg"])
print(cities)


ptl()
# 类型
int_num = 10 #int value
float_num = 10.2 #float value
complex_num = 3.14j #complex value
long_num = 1234567L #long value
print(int_num)
print(float_num)
print(complex_num)
print(long_num)

ptl()
#list
list = [123,'abcd',10.2,'d'] #can be an array of any data type or single data type. 
list1 = ['hello','world']
print(list) #will output whole list. [123,'abcd',10.2,'d']
print(list[0:2])
print(list1 * 2)
print(list + list1)


ptl()
#dictionary

dic={'name':'red','age':10}
print(dic) #will output all the key-value pairs. {'name':'red','age':10}
print(dic['name']) 
print(dic.values()) 
print(dic.keys())

ptl()
#tuple
tuple = (123,'hello')
tuple1 = ('world','a')
print(tuple) #will output whole tuple. (123,'hello') 
print(tuple[0]) #will output first value. (123) 

print(tuple + tuple1) #will output (123,'hello','world') 
# tuple[1]='update'
# print(tuple)

# 小结
# 1 第二章相对简单一些
# 2 对于元组而言，一维元组被认为是字符串，不能直接想加减
# 3 主要介绍了字符串、集合、数值、列表、字段、元组几种数据结构