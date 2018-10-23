let fs = require('fs');
let fileTypeFromCLI='';
let fileTypeFromDir='';
let stringToSearchFor='';
let args=[];
// print process.argv
args=process.argv.slice(2);

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


console.log('fileTypeFromCLI',fileTypeFromCLI)
console.log('stringToSearchFor',stringToSearchFor);
console.log(__dirname)


function readContent(filePath, fileTypeFromDir) {
    if(fs.lstatSync(filePath).isDirectory()) {
      //
    } else{
      fs.readFile(filePath, 'utf8', function (err, content) {
          if (err){
           	console.log(err)
          } else {
          	search(content, fileTypeFromDir);
          }
      })
    }
}

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


function search(content, fileTypeFromDir){
  // console.log('content: ',content);
  console.log('fileTypeFromDir: ',fileTypeFromDir);

  // if(){

  // }else{
  //   console.log('No file was found');
  // }
}