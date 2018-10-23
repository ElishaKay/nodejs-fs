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


function readContent(callback) {
    fs.readFile("./Index.html", function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

fs.readdir(process.cwd(), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});

readContent(function (err, content) {
    console.log('content: ',content)
});