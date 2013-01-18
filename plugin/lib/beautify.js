var jsbeautify = require('js-beautify').js_beautify,
    fs = require('fs'),
    path = require('path'),
    argv = require('optimist')
        .options('c', {
        alias: 'config',
        default: ''
    })
        .argv;

var filename = argv._[0],
    configFile = argv.c,
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

if (configFile !== '') {
    if (fs.existsSync(configFile)) {
        opts = require(configFile)
    } else {
        process.stderr.write('configFile ' + configFile + ' does not exist');
        process.exit(1);
    }
}

var result = jsbeautify(data.toString(), opts);
console.log(result);
