var http=require('http');
var url=process.argv[2];
var str='';

http.get(url,function (response){
 response.setEncoding('utf8');
 response.on('data',function(data){ 
  str+=data+'\n';
});
 response.on('end',function(){

 console.log(str);

});

});
