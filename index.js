'use strict';
require('dotenv').load();
var express = require('express'),
	app = express(),
	getPIN = require('./PIN.js'),
	port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));
app.set('views', 'src/server/views')
	.set('view engine', 'ejs');

app.get('/',function(req,res){
	res.render('index');
});

app.get('/generate', function(req,res){
	getPIN(0,9)
	.then(function(){
		res.redirect('/generate',{
			getPIN:getPIN
		});
	});
});


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(port, function(){
  	console.log("socket listen on " + port + "...");
});

module.exports = app;
