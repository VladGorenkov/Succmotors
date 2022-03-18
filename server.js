var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));



console.log('Served: http://localhost:' + port);
app.listen(port);