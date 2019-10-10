# !/usr/bin/python
# coding=utf-8
import math
import datetime
from common import ptl

class ExampleClass:
  #Every function belonging to a class must be indented equally 
  def __init__(self):
    name = "example"
    print(name)
  def someFunction(self, a):
  #Notice everything belonging to a function must be indented 
    if a > 5:
      return True 
    else:
      return False
    
exam=ExampleClass()
print(exam.someFunction(2))
print(exam.someFunction(12))


ptl()

def separateFunction(b): 
  for i in b:
  #Loops are also indented and nested conditions start a new indentation
    if i == 1: 
	    return True
  return False

print(separateFunction([2,3,5,6,1]))
print(separateFunction([2,3,5,6]))

a = 7
if a > 5:
	print("foo")
else:
	print("bar")
print("done")

if True:
	print("true")
	
