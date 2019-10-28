# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl

ptl()
a = datetime.datetime(2016,10,6,0,0,0)
b = datetime.datetime(2016,10,1,23,59,59)
print(a-b)
print((a-b).days)
print((a-b).total_seconds())

ptl()
datetime_for_string = datetime.datetime(2016,10,1,0,0) 
datetime_string_format = '%b %d %Y, %H:%M:%S' 
print(datetime.datetime.strftime(datetime_for_string,datetime_string_format))

ptl()
datetime_string = 'Oct 1 2016, 00:00:00' 
datetime_string_format = '%b %d %Y, %H:%M:%S' 
datetime.datetime.strptime(datetime_string, datetime_string_format)