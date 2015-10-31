var gulp = require('gulp');
var filesystem = require('fs');


// http://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript
var getAllFilesFromFolder = function(dir, num) {

  var results = [];

  filesystem.readdirSync(`./${dir}`).forEach(function(file) {

    // file = dir+'/'+file;
    // var stat = filesystem.statSync(file);
    //
    // if (stat && stat.isDirectory()) {
    //   results = results.concat(_getAllFilesFromFolder(file))
    // } else {
    //   results.push(file)
    // };
    //
    results.push(`./${dir}/${file}`)

  });

  return results[(num - 1)];

};

//var filez = _getAllFilesFromFolder('./js');

var aFile = function(no, path) {
  // var file = getAllFilesFromFolder(path);
  // return file[(no - 1)]
  return getAllFilesFromFolder(path)[(no - 6)]
}

//console.log( aFile(1, './js') );
//
console.log( getAllFilesFromFolder('js', 3));
