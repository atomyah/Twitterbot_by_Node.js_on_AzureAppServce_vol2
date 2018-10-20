//server.js

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
res.send('Hello World')
})
app.get('/bye', function(req, res) {
res.send('さよなら')
})

app.listen(app.get('port'), function() {
console.log("Node testapp is runnning at localhost:" + app.get('port'))
})
