db.test.remove({});
db.test.insert({"key":"a","key2":"b","key3":"c"});
db.test.insert({"key":"1","key2":"2","key3":"3"});
var totalcount = db.test.count();
printjson(totalcount)
printjson("--------------------------------------------- ")
printjson(db.test.findOne({}));
printjson("--------------------------------------------- ")
var list=[]

db.test.find({})
.forEach(function(doc){
	list.push(doc);
})
printjson(list)
	
