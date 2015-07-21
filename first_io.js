var fs = require('fs');
var f=process.argv[2];
var buffer = fs.readFileSync(f);
var str=buffer.toString();
var n=0;
for(var i=0;i<str.length;i++)
    {
 	if(str[i]==='\n')
	{
	 n++;
	}
}	
console.log(n);
