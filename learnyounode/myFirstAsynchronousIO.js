var fs = require('fs');

// Asynchronously reading the file
fs.readFile(process.argv[2], function (err, buffer) { 

// Check if there is some error in the file reading	
	if(err) {
		console.log('Error')
	} else {

// Else countinue the process 
		var converting = buffer.toString();
		// convert the value in the buffer into string

		var lines = converting.split("\n").length -1;

// Display the number of \n break lines
		console.log(lines)
	}
});
