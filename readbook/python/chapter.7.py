# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl


ptl()
from enum import Enum
class Color(Enum): 
	red = 1
	green = 2
	blue = 3
print(Color.red) # Color.red 
print(Color(1)) # Color.red 
print(Color['red']) # Color.red
list=[c for c in Color]
print(list)

