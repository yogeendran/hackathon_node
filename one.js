var http=require('http');
var fs=require('fs');
module.exports.onrequest=function (request,response){
	response.writeHead(200, {"content-type":"text/json"});
	fs.createReadStream("./json/one.json").pipe(response);
}