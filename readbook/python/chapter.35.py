# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl

s=lambda x:x*x
print(s(2))
print(s(3))
print(s(5))
print(s(7))
print(s(9))

name_lengths = map(len, ["Mary", "Isla", "Sam"])
print(name_lengths)

total = reduce(lambda a, x: a + x, [0, 1, 2, 3, 4]) 
print(total)

arr=[1,2,3,4,5,6]
result=[i for i in filter(lambda x:x>4,arr)]
print(result)

ptl()