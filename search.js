let fs = require('fs');
let fileType='';
let stringToSearchFor='';
let args=[];
// print process.argv
args=process.argv.slice(2);

if(args === undefined || args.length == 0){
    	console.log('USAGE: node search [EXT] [TEXT]');
} else {
	for (let i = 0; i < args.length; i++) { 
	     if(i==0){
	    	fileType=args[i];
	    } else if (i==1){
	    	stringToSearchFor=args[i];
	    } 
	}
}


console.log('fileType',fileType)
console.log('stringToSearchFor',stringToSearchFor);


function readContent(filePath) {
    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err){
         	console.log(err)
        } else {
        	console.log(content);
        }
    })
}

fs.readdir(process.cwd(), function (err, files) {
  	if (err) {
   		console.log(err);
  	} else {
		for (let i = 0; i < files.length; i++) {
			readContent(files[i]);
		}
		console.log(files);
  }
});

