# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl

import pydotplus
graph_a = pydotplus.graph_from_dot_file('demo.dot') 
print(graph_a)
# graph_a.write_svg('test.svg') # generate graph in svg.

# 安装出错，没能进行下去；