var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
// buffer takes [0], [1], 2nd argument in the terminal - this is just path to the file

var converting = buffer.toString();
// convert the value in the buffer into string

var lines = converting.split("\n").length -1;

console.log(lines);
