var http=require('http');
var fs=require('fs');

function error(response){
response.writeHead(404, {"content-type":"text/plain"});
response.write("Error occured in the page");
response.end();
}

function onrequest(request,response){
if(request.method == 'GET' && request.url == '/one')
{
	response.writeHead(200, {"content-type":"text/json"});
	fs.createReadStream("./one.json").pipe(response);
}
else if(request.method == 'GET' && request.url == '/two')
{
	response.writeHead(200, {"content-type":"text/json"});
	fs.createReadStream("./two.json").pipe(response);
}
else
{
	error(response); 
}
}
http.createServer(onrequest).listen(8888);
console.log("Server is now on"); 
