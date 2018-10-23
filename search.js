fs = require('fs');

// print process.argv
process.argv.slice(2).forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

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
    console.log(content)
});