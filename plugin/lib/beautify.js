var jsbeautify = require('js-beautify').js_beautify,
	fs = require('fs'),
	path = require('path');

var filename = process.argv[2],
	configFile = null,
	opts = {};

function getUserHome() {
		return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

if (filename === undefined) {
	console.log('usage: ' + process.argv[1] + ' filename');
	console.log(' or provide - as the filename to read from stdin.');
	process.exit(1);
}

if (filename === '-') {
	data = fs.readFileSync('/dev/stdin').toString();
} else {
	data = fs.readFileSync(filename);
}

configFile = path.join(getUserHome(), '.euoia-js-beautify.json');

if (fs.existsSync(configFile)) {
	opts = require(configFile)
} else {
	console.log('configFile ' + configFile + ' does not exist');
	opts = {};
}

var result = jsbeautify(data.toString(), opts);
console.log(result);
