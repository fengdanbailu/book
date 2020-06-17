const http = require('http');
const fs = require('fs');

// 后端服务 http支持返回JSON结构；另外，有一个第三份模块request-json
function test1(){
	const server = http.createServer();
	server.listen(9001, function(){
		console.log('服务器正在端口号：9001上运行......');
	});
	
	server.on('request',function(request,response){
		var url = request.url;
		console.log('收到客户端发出的请求:'+url);
		if(url ==='/'){
			response.writeHead(200,{'Content-Type':'text/html'})
			fs.readFile('./main.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}else if(url === '/flot'){
			response.writeHead(200,{'Content-Type':'text/html'});
			// 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
			fs.readFile('./flot.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}else{
			response.writeHead(200,{'Content-Type':'text/html'});
			// 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
			fs.readFile('./default.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}
	});
}

function test2(){
		// nodejs做中间层,写增删改查
		console.log("test2");
}

test2();