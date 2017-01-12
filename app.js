var http=require('http');
var fs=require('fs');
var one=require('./one.js');
var two=require('./two.js');
var three=require('./three.js');
var four=require('./four.js');

function error(response){
response.writeHead(404, {"content-type":"text/plain"});
response.write("Error occured in the page");
response.end();
}

function onrequest(request,response){
if(request.method == 'GET' && request.url == '/one')
{
	one.onrequest(request,response);
}

else if(request.method == 'POST' && request.url == '/three')
{
	three.onrequest(request,response);
}

else if(request.method == 'GET' && request.url == '/two')
{
	two.onrequest(request,response);
}
else if(request.method == 'GET' && request.url == '/four/:country')
{
	four.finddata(request,response);
}
else
{
	error(response); 
}
}
http.createServer(onrequest).listen(8888);
console.log("Server is now on"); 
