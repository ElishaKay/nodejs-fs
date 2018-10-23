let fs = require('fs');
let recursive = require("recursive-readdir");

let fileTypeFromCLI='';
let fileTypeFromDir='';
let stringToSearchFor='';
let args=[];
// print process.argv
args=process.argv.slice(2);

//save cli arguments in variables
if(args === undefined || args.length == 0){
    	return console.log('USAGE: node search [EXT] [TEXT]');
} else {
	for (let i = 0; i < args.length; i++) { 
	     if(i==0){
	    	fileTypeFromCLI=args[i];
	    } else if (i==1){
	    	stringToSearchFor=args[i];
	    } 
	}
}

//grab files recursively
recursive(".", [".git*", "node_modules/*", ], function (err, files) {
    let promises=[];
    if (err) {
      console.log(err);
    } else {
    for (let i = 0; i < files.length; i++) {
      let fileTypeFromDir=files[i].split('.')[1];
      let newPromise = readAndSearch(files[i], fileTypeFromDir);
      promises.push(newPromise);
    }

    Promise.all(promises).then(res => console.log('No file was found'));
  }
});


var readAndSearch = function(filePath, fileTypeFromDir) {
  return new Promise(function(resolve, reject) {
  /*stuff using username, password*/
    if(fs.lstatSync(filePath).isDirectory()) {
      //
    } else {
      fs.readFile(filePath, 'utf8', function (err, content) {
          if (err){
            console.log(err)
          } else {
            if(fileTypeFromDir==fileTypeFromCLI && content.includes(stringToSearchFor)){
              console.log(__dirname+'/'+filePath);

            } else {
              resolve({status: 'not found'})
            }
          }
      })
    }
  })
};

