# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl

import xlrd

book=xlrd.open_workbook("sample.xlsx")
print(book.nsheets)
print(book.sheet_names)
sheet=book.sheet_by_index(0)
cell =sheet.cell(2,3)
print(cell.value)
ptl()
num_rows=sheet.nrows
num_col=sheet.ncols
sheets = book.sheet_names()
cur_sheet = book.sheet_by_name(sheets[0])
print(num_rows)
print(num_col)
print(cur_sheet)
print(sheets)