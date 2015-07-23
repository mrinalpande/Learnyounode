var mod=require('./module1.js');
mod.dir=process.argv[2];
mod.ext=process.argv[3];
mod(mod.dir,mod.ext,function(err,list){
if(err)
 return callback(err);


for(var i=0;i<mod.arr.length;i++)
{	
	console.log(mod.arr[i]);
}
});
