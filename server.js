var fs = require('fs');
var http = require('http');
var templateEngine = require('./templateEngine.js');

var server = http.createServer(function(request, response){

  var readStream = fs.createReadStream('output/template.html');
  var writeStream = fs.createWriteStream('output/output.html');
  readStream.setEncoding('utf8');

  readStream.pipe(new templateEngine()).pipe(writeStream);

  response.end();

}).listen(8080);