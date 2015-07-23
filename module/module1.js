var fs=require('fs');
var path=require('path');
var dir;
var ext;
var j=0;
var arr=[];

 module.exports = function(dir,ext,callback){
     fs.readdir(dir,function(err,data){
	if(err)
	   return callback(err);
	
	for(var i=0;i<data.length;i++)
 	{
	   if(path.extname(data[i])==='.'+ext)
	     {
		arr[j]=data[i];
		j++;
	     }
	}
return callback(null,arr);
})
}
module.exports.dir=dir;
module.exports.ext=ext;
module.exports.arr=arr;
