const data = require('./data/raw.js');
const app = require('./src/main.js');
const test1=function(){
	for(var i=0;i<data.length;i++){
		var raw=data[i];
		var matrix=app.format(raw)
		console.log("-----------------------------------");
		console.log((i+1)+" | "+app.isShudu(raw)+" | "+app.isShudu(matrix)+" | "+app.isStandardShudu(raw)+" | "+app.isStandardShudu(matrix));
		console.log(matrix);	
	}
}
const printMatrix=function(data){
	for(var i=0;i<data.length;i++){
		console.log("-----------------------------------");
		console.log(app.isShudu(data[i])+","+app.isStandardShudu(data[i])+" -> 第"+(i+1)+"个矩阵");
		console.log(data[i]);
	}
}
const test2=function(){
	printMatrix(data);
	var result=data.sort(function(A,B){
		return app.compare(A,B); 
	});
	printMatrix(result);
}
test1();


