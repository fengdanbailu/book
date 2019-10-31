# !/usr/bin/python
# coding=utf-8
import math
import datetime
import xlrd
import xlsxwriter
book=xlrd.open_workbook('./your_file.xlsx')
print("Hello, I'm Chen.")
print(book.nsheets)
print(book.sheet_names())
sheet=book.sheet_by_index(0)
print(sheet)


# workbook = xlsxwriter.Workbook('your_file.xlsx') 
# percent_format = workbook.add_format({'num_format': '0%'})
# percent_with_decimal = workbook.add_format({'num_format': '0.0%'})
# bold = workbook.add_format({'bold': True})
# red_font = workbook.add_format({'font_color': 'red'})
# remove_format = workbook.add_format()
# worksheet = workbook.add_worksheet() # set the width of column A
# worksheet.set_column('A:A', 30, )
# # set column B to 20 and include the percent format we created earlier
# worksheet.set_column('B:B', 20, percent_format)
# # remove formatting from the first row (change in height=None)
# # worksheet.set_row('0:0', None, remove_format)
# workbook.close()
