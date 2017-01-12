var fs=require('fs');
exports.finddata = function(req,res){
  fs.readFile('./json/one.json', function (err, data) {
    if (err) console.log('Here');
    var jsonData = JSON.parse(data);  
    
    for (var i = 0; i < jsonData.length; ++i) {
      if(jsonData[i].country == req.params.country){
        res.json(jsonData[i]);
      }
    } 
    res.end('Done');
  });
}