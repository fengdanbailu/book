# !/usr/bin/python
# coding=utf-8
import math
import datetime
import time
from common import ptl

dt = datetime.datetime.strptime("2019-10-13T10:23:00-0500","%Y-%m-%dT%H:%M:%S%z")
ptl
print(dt)

import dateutil.parser
dt2 = dateutil.parser.parse("2016-04-15T08:27:18-0500")
print(dt2)

# dt3 = datetime.datetime(2016, 4, 15, 8, 27, 18, tzinfo=tzoffset(None, -18000))
# print(dt3)

ptl()
JST = datetime.timezone(datetime.timedelta(hours=+8))
dt = datetime.datetime(2015, 1, 1, 12, 0, 0, tzinfo=JST) 
print(dt)
# 2015-01-01 12:00:00+09:00
print(dt.tzname()) 
# UTC+09:00
dt = datetime.datetime(2015, 1, 1, 12, 23, 0, tzinfo=datetime.timezone(datetime.timedelta(hours=8), 'JST'))
print(dt)

ptl()
from dateutil import tz
local = tz.gettz() # Local time
PT = tz.gettz('US/Pacific') # Pacific time
dt_l = datetime.datetime(2015, 1, 1, 12, tzinfo=local) # I am in EST
dt_pst = datetime.datetime(2015, 1, 1, 12, tzinfo=PT)
dt_pdt = datetime.datetime(2015, 7, 1, 12, tzinfo=PT) # DST is handled automatically 
print(dt_l)
# 2015-01-01 12:00:00-05:00
print(dt_pst)
# 2015-01-01 12:00:00-08:00
print(dt_pdt)
# 2015-07-01 12:00:00-07:00

ptl()
now = datetime.datetime.now()
then = datetime.datetime(2016, 5, 23)
delta = now-then
print(delta)
print(delta.days)
print(delta.seconds)

def get_n_days_after_date(date_format="%Y-%m-%dT%H:%M:%S%z", add_days=120):
	date_n_days_after = datetime.datetime.now() + datetime.timedelta(days=add_days) 
	return date_n_days_after.strftime(date_format)
	
def get_n_days_before_date(date_format="%Y-%m-%dT%H:%M:%S%z", days_before=120):
	date_n_days_ago = datetime.datetime.now() - datetime.timedelta(days=days_before) 
	return date_n_days_ago.strftime(date_format)

ptl()
print(get_n_days_after_date(add_days=2))
print(get_n_days_before_date(days_before=2))

ptl()
today = datetime.date.today()
new_year = datetime.date(2017, 1, 1) #datetime.date(2017, 1, 1)
# Time object
noon = datetime.time(12, 0, 0) #datetime.time(12, 0)
# Current datetime
now = datetime.datetime.now()
print(today)
print(new_year)
print(noon)
print(now)

ptl()
today = datetime.date.today()
print('Today:', today)
yesterday = today - datetime.timedelta(days=1)
print('Yesterday:', yesterday)
tomorrow = today + datetime.timedelta(days=1)
print('Tomorrow:', tomorrow)
print('Time between tomorrow and yesterday:', tomorrow - yesterday)

ptl()
seconds_since_epoch=time.time() #1469182681.709
utc_date=datetime.datetime.utcfromtimestamp(seconds_since_epoch) #datetime.datetime(2016, 7, 22, 10, 18, 1, 709000)
print(utc_date)

ptl()
import calendar
def monthdelta(date, delta):
	m, y = (date.month+delta) % 12, date.year + ((date.month)+delta-1) // 12 
	if not m: 
		m = 12
	d = min(date.day, calendar.monthrange(y, m)[1])
	return date.replace(day=d,month=m, year=y)
next_month = monthdelta(datetime.date.today(), 1) #datetime.date(2016, 10, 23)

ptl()
print(str(datetime.datetime(2016, 7, 22, 9, 25, 59, 555555)))
print(str(datetime.datetime(2016, 7, 22, 9, 25, 59, 0)))


import iso8601
t1=iso8601.parse_date('2016-07-22 09:25:59')
# datetime.datetime(2016, 7, 22, 9, 25, 59, tzinfo=<iso8601.Utc>) 
t2=iso8601.parse_date('2016-07-22 09:25:59+03:00')
# datetime.datetime(2016, 7, 22, 9, 25, 59, tzinfo=<FixedOffset '+03:00' ...>) 
t3=iso8601.parse_date('2016-07-22 09:25:59Z')
# datetime.datetime(2016, 7, 22, 9, 25, 59, tzinfo=<iso8601.Utc>) 
t4=iso8601.parse_date('2016-07-22T09:25:59.000111+03:00')
# datetime.datetime(2016, 7, 22, 9, 25, 59, 111, tzinfo=<FixedOffset '+03:00' ...>)

ptl()

print(t1)
print(t2)
print(t3)
print(t4)


ptl()
from dateutil import tz
from dateutil.parser import parse
ET = tz.gettz('US/Eastern')
CT = tz.gettz('US/Central')
MT = tz.gettz('US/Mountain')
PT = tz.gettz('US/Pacific')
us_tzinfos = {'CST': CT, 'CDT': CT,
              'EST': ET, 'EDT': ET,
              'MST': MT, 'MDT': MT,
              'PST': PT, 'PDT': PT}
dt_est = parse('2014-01-02 04:00:00 EST', tzinfos=us_tzinfos)
dt_pst = parse('2016-03-11 16:00:00 PST', tzinfos=us_tzinfos)
print(us_tzinfos)
print(dt_est)
print(dt_pst)


import pytz
ptl()
EST = pytz.timezone('America/New_York')
dt = parse('2014-02-03 09:17:00 EST', tzinfos={'EST': EST})
print( dt.tzinfo )
print(dt)

ptl()
dt = parse("Today is January 1, 2047 at 8:21:00AM", fuzzy=True) 
print(dt)

ptl()
day_delta = datetime.timedelta(days=1)
start_date = datetime.date.today()
end_date = start_date + 7*day_delta
for i in range((end_date - start_date).days): 
	print(start_date + i*day_delta)

# 小结 
# 1.python的2和3版本在datetime方便有差异，注意各个版本的情况
