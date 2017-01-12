var http=require('http');
var fs=require('fs');
module.exports.onrequest=function onrequest(request,response){
	request.on('data',(data)=>{
	response.writeHead(200, {"content-type":"text/json"});
	response.write(data);
	var see=""+data;
	var arr=see.split("}");
	fs.appendFile("./json/one.json",arr[0]);
	fs.appendFile("./json/two.json",arr[1]);
	response.end();});
}