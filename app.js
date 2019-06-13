var express = require('express');
var app = express();






function read(lines) //Line Parameter, default will be last 10 lines  
{
	
var fs = require('fs');
fs.readFile('test.txt', function(err, data) {	
    if(err) throw err;
    var array = data.toString().split("\n");
	var len=array.length;
	lines=lines||10;
	var start=len-lines;
	
	if (start<0)
	{
		console.log("less than 10 lines in file");
	}
	else
	{
   for(i=start;i<len;i++ ) {
	   
        console.log(array[i]);
   }
	}
});

}


read();




app.listen(3000, function () {
  
  console.log ('Content of test.txt is:');
});

//-------------------