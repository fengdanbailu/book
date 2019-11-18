const data = require('./data/raw.js');
const app = require('./src/main.js');
for(var i=0;i<data.length;i++){
	var raw=data[i];
	var matrix=app.format(raw)
	console.log("-----------------------------------");
	console.log((i+1)+" | "+app.isOK(raw)+" | "+app.isOK(matrix));
	console.log(matrix);
	
}

