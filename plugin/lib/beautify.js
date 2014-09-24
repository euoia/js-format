var
	fs = require('fs'),
	path = require('path'),
	validTypes = ['js', 'html', 'css'],
	argv = require('optimist')
		.usage ('Beautifully format a JavaScript, HTML, or CSS file.')
		.describe('c', 'config file')
		.default('c', '')
		.alias('c', 'config')
		.describe('t', 'file type; one of: js, html, css')
		.alias('t', 'type')
		.default('t', 'js')
		.check( function (argv) {
			if (argv._[0] === undefined){
				throw 'Provide filename or - to read from stdin.';
			}

			if (argv._[0] !== '-' && fs.existsSync(argv._[0]) === false){
				throw 'Input file ' + argv._[0] + ' does not exist.';
			}

			if (argv.c !== '' && fs.existsSync(argv.c) === false) {
				throw 'Config file ' + argv.c + ' does not exist.';
			}

			if (validTypes.indexOf(argv.t) == -1) {
				throw 'type must be one of: ' + validTypes.join(', ');
			}
		})
		.argv;

var filename = argv._[0],
	configFile = argv.c,
	type = argv.t,
	opts = {};

function getUserHome() {
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

if (filename === '-') {
	data = fs.readFileSync('/dev/stdin').toString();
} else {
	data = fs.readFileSync(filename);
}

if (configFile !== '') {
	opts = JSON.parse(fs.readFileSync(configFile, 'utf8'));
}

switch (type) {
	case "js":
		var beautify = require('./lib/js-beautify/beautify').js_beautify;
		break;
	case "html":
		var beautify = require('./lib/js-beautify/beautify-html').html_beautify;
		break;
	case "css":
		var beautify = require('./lib/js-beautify/beautify-css').css_beautify;
		break;
}

var result = beautify(data.toString(), opts);
console.log(result);
