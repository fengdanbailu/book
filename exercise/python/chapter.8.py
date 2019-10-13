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

