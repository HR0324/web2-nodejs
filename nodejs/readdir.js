var testFolder = 'web2-nodejs';
var fa = require('fa');

fa.readdir(testFolder, function(error, filelist){
     console.log(filelist);
})