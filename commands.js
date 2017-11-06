const fs = require("fs");
module.exports = {
  pwd: function (data) {
    return process.mainModule.filename.split('/').slice(0, -1).join('/');
  },
  ls: function () {
   return fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
  });
}
}
