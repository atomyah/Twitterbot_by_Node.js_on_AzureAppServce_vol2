//server.js

var express = require('express');
var app = express();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test_user',
  password : 'password',
  database : 'test'
})

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Hello World')
})
app.get('/bye', function(req, res) {
  res.send('さよなら')
})


app.get('/mysql', function(req, res) {
  connection.query('select * from tips', function (error, results, fields) {
    if (error) throw error
    res.send(results[0].tips)
  })
})

app.listen(app.get('port'), function() {
console.log("Node testapp is runnning at localhost:" + app.get('port'))
})
