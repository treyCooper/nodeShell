const commands = require('./commands.js');
process.stdout.write('prompt > ');
const pwd = commands.pwd;
const ls = commands.ls;
const cat = commands.cat;
const date = commands.date;
const head = commands.head;
const tail = commands.tail;
const sort = commands.sort;
const wc = commands.wc;
const uniq = commands.uniq;
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  data = data.toString().trim().split(' ');
  var cmd = data.shift().toString(); // remove the newline
  var args = data.join(' ');
  switch(cmd) {
    default:
      break;
    case 'echo':
      process.stdout.write(args);
      process.stdout.write('\nprompt > ');
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
      ls(args);
      break;
    case 'cat':
      cat(args);
      break;
    case 'head':
      head(args);
      break;
    case 'tail':
      tail(args);
      break;
    case 'sort':
      sort(args);
      break;
    case 'wc':
      wc(args);
      break;
    case 'uniq':
      break;
  }


});
