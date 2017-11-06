// console.log(process);
// console.log(process.mainModule.filename);
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  switch(cmd) {
    case 'pwd':
      //function
      process.stdout.write(pwd(cmd));
      break;
    case 'date':
      //function
      process.stdout.write(date());
      break;
  }
  process.stdout.write('\nprompt > ');

});

function pwd(data) {
  return process.mainModule.filename.split('/').slice(0, -1).join('/');
}

function date() {
  return new Date().toString();
}
