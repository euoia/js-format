var express = require('express'),
	routes = require('./routes'),
	login = require('./routes/login'),
	user = require('./routes/user'),
	http = require('http'),
	path = require('path'),
	lessMiddleware = require('less-middleware'),
	RedisStore = require('connect-redis')(express);
var secret = "put me in a config file";

app.configure(function() {

	// Sessions won't work unless you have these 3 in this order: cookieParser,
	// session router.
});
