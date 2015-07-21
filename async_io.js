var fs=require('fs');
var f=process.argv[2];
fs.readFile(f,function buff(err,contents) {
var buf=contents.toString();
var n=0;
for(var i=0;i<buf.length;i++)
 {
  if(buf[i]==='\n')
  {   
    n++;
  }
 }
console.log(n);
});
