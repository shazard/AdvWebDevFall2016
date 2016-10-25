#!/usr/bin/env node
var debug = require('debug')('Express4');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
console.log('server running on port ' + server.address().port + ". Site Address: http://localhost:3000/index.html");