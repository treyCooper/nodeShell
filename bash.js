const commands = require('./commands.js');
process.stdout.write('prompt > ');
const pwd = commands.pwd;
const ls = commands.ls;

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  switch(cmd) {
    default:
      break;
    case 'pwd':
      //function
      process.stdout.write(pwd(cmd));
      process.stdout.write('\nprompt > ');
      break;
    case 'date':
      //function
      process.stdout.write(date());
      process.stdout.write('\nprompt > ');
      break;
    case 'ls':
      ls();
      break;
  }


});



function date() {
  return new Date().toString();
}
