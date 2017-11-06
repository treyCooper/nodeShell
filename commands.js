const fs = require("fs");
module.exports = {
  pwd: function (data) {
    return process.mainModule.filename.split('/').slice(0, -1).join('/');
  },
  ls: function (arguments) {
   return fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  cat: function(fileName) {
    fs.readFile(fileName, function(err, data) {
      // console.log(data.toString());
      process.stdout.write(data.toString());
      process.stdout.write("prompt > ");
    })
    // process.stdout.write(fs.toString());
  },
  head: function(fileName, lineAmt = 5) {
    fs.readFile(fileName, function(err, data) {
      // console.log(data.toString().split('\n'));
      const arr = data.toString().split('\n');
      for(let i = 0; i < lineAmt; i++) {
        process.stdout.write(arr[i] + '\n');
      }
      process.stdout.write("prompt > ");
    })
  },
  tail: function(fileName, lineAmt = 5) {
    fs.readFile(fileName, function(err, data) {
      const arr = data.toString().split('\n');
      for(let i = (arr.length - 6); i < arr.length; i++) {
        process.stdout.write(arr[i] + '\n');
      }
      process.stdout.write("prompt > ");
    })
  },
  date: function(option) {
    return new Date().toString();
  },
  sort: function(fileName) {
    fs.readFile(fileName, function(err, data) {
      // console.log(data.toString());
      const arr = data.toString().split('\n').sort().join('\n');
      process.stdout.write(arr);
      process.stdout.write("prompt > ");
    })
  },
  wc: function(fileName) {
    fs.readFile(fileName, function(err, data) {
      // console.log(data.toString());
      const arr = data.toString().split('\n');
      process.stdout.write(arr.length.toString() + '\n');
      process.stdout.write("prompt > ");
    });

  },
  uniq: function() {

  }
}
