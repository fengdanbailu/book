# !/usr/bin/python
# coding=utf-8
# 资料来自https://goalkicker.com/  python
import keyword
from collections import defaultdict
import math
import datetime
from common import ptl


# 当前版本对python2和3都支持
print("Hello, World")
# print 'Hello, World'
ptl()
print(keyword.kwlist)
ptl()
a,b,c=1,2,3
print(a,b,c)
ptl()
def my_function():
	a=2
	return a

print(my_function())

def will_be_implemented_later():
	pass

print(type(my_function))

ptl()

int_list=[1,2,3]
string_list=["abc","def"]
mixed_list=[1,'abc',True,2.3]
print(int_list)
print(string_list)
print(mixed_list)
ptl()
names = ['Alice', 'Bob', 'Craig', 'Diana', 'Eric']
names.append("Sia")
print(names)

names.insert(1, "Nikki")
print(names)
names.remove("Bob")
print(names)

index_sign=names.index("Alice")
print(index_sign)
print(len(names))

a = [1, 1, 1, 2, 3, 4]
# print a.count(1)
print(a)
a.reverse()
print(a)


print(names.pop())
print(names)

for element in names: 
	print (element)
ptl()


ip_address = ('10.20.30.40', 8080)
print(ip_address)

state_capitals = {
    'Arkansas': 'Little Rock',
    'Colorado': 'Denver',
    'California': 'Sacramento',
    'Georgia': 'Atlanta'
}
print(state_capitals)

for k in state_capitals.keys():
	print('{0} is the capital of {1}'.format(state_capitals[k], k))
	print('{1} is the capital of {0}'.format(state_capitals[k], k))

ptl()


state_capitals = defaultdict(lambda: 'Boston')
state_capitals['Arkansas'] = 'Little Rock'
state_capitals['California'] = 'Sacramento'
state_capitals['Colorado'] = 'Denver'
state_capitals['Georgia'] = 'Atlanta'
print(state_capitals['Alabama'])
print(state_capitals['Arkansas'])

ptl()

# name = raw_input("What is your name? ")
# print(name)

# name2 = input("What is your name? ")
# print(name2)

ptl()
print(pow(2,3))
print(pow(3,2))
print(dir(__builtins__))
ptl()
# help(max)
print(math.sqrt(16))
print(math.sqrt(15))
print(dir(math))

print(math.__doc__)

ptl()

s = """w'o"w"""
print(s)
print(repr(s)) # Output: '\'w\\\'o"w\''
print(str(s)) # Output: 'w\'o"w'
# print(eval(str(s)) == s) # Gives a SyntaxError 
print(eval(repr(s)) == s) # Output: True


ptl()
today = datetime.datetime.now()
print(today)
print(str(today)) # Output: '2016-09-15 06:58:46.915000'
print(repr(today)) # Output: 'datetime.datetime(2016, 9, 15, 6, 58, 46, 915000)'


ptl()
class Represent(object):
	def __init__(self, x, y):
		self.x, self.y = x, y 
	def __repr__(self):
		return "Represent(x={},y=\"{}\")".format(self.x, self.y)
	def __str__(self):
		return "Representing x as {} and y as {}".format(self.x, self.y)

r = Represent(1, "Hopper")
print(r) # prints __str__
print(r.__repr__) # prints __repr__: '<bound method Represent.__repr__ of Represent(x=1,y="Hopper")>'
rep = r.__repr__() # sets the execution of __repr__ to a new variable print(rep) # prints 'Represent(x=1,y="Hopper")'
r2 = eval(rep) # evaluates rep
print(r2) # prints __str__ from new object
print(r2 == r) # prints 'False' because they are different objects

ptl()
print(help(math))

# 小结
# 1 python2和python3的差距比较大，生产环境要注意
# 2 理解import和import from以及函数的定义
# 3 python执行时，会产生pyc等文件，需要在ignore上配置好
