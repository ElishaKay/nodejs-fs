let fs = require('fs');
let fileTypeFromCLI='';
let fileTypeFromDir='';
let stringToSearchFor='';
let args=[];
// print process.argv
args=process.argv.slice(2);

//save cli arguments in variables
if(args === undefined || args.length == 0){
    	console.log('USAGE: node search [EXT] [TEXT]');
} else {
	for (let i = 0; i < args.length; i++) { 
	     if(i==0){
	    	fileTypeFromCLI=args[i];
	    } else if (i==1){
	    	stringToSearchFor=args[i];
	    } 
	}
}

//fetch files from the directory
fs.readdir(process.cwd(), function (err, files) {
  	if (err) {
   		console.log(err);
  	} else {
		for (let i = 0; i < files.length; i++) {
			let fileTypeFromDir=files[i].split('.')[1];
      readContent(files[i], fileTypeFromDir);
		}
  }
});


// read the content of the given file 
function readContent(filePath, fileTypeFromDir) {
    if(fs.lstatSync(filePath).isDirectory()) {
      //
    } else {
      fs.readFile(filePath, 'utf8', function (err, content) {
          if (err){
            console.log(err)
          } else {
            search(content, fileTypeFromDir, filePath);
          }
      })
    }
}

//search through the content of the given file
//and compare to the cli arguments passed in by the client
function search(content, fileTypeFromDir, filePath){
  if(fileTypeFromDir==fileTypeFromCLI && content.includes(stringToSearchFor)){
    return console.log(__dirname+'/'+filePath);
  } else {
    console.log('No file was found');
  }
}