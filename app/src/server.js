var express = require('express');
var app = express();
var engines = require('consolidate');
var path=require('path');

app.engine('html', engines.mustache);
app.set('view engine', 'html');
//your routes here
app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/utils.js',function(req,res){
	res.sendFile(path.join(__dirname,'public','utils.js'))
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
