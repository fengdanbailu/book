# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl

set1={1, 2, 3, 4,5}
set2={3, 4, 5, 6}
ptl()
print(set1.intersection(set2))
print(set1 & set2)
ptl()
print(set1.union(set2))
print(set1 | set2)

ptl()
set3={1,2,3,4}
set4={2,3,5}
print(set3.difference(set4))
print(set3 - set4)
print(set3.symmetric_difference(set4))
print(set3 ^ set4)

set5 = {1, 2}
set6 = {1, 2, 3}
print(set5.issuperset(set6))
print(set5 >= set6)

print(set5.issubset(set6))
print(set5 <= set6)

print(set1.isdisjoint({3,4}))
print(set1.isdisjoint({1,4}))

ptl()