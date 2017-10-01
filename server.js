var http = require('http');
var url = require('url');

var fs=require('fs');
var data=fs.readFileSync('things.json');
var mydata = JSON.parse(data);
var i = 0, last = mydata.length;

function index(req, res) {
  console.log("Request: " + req.url);
  if(req.url == "/index.html") {

    fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(text);
    });
    return;

  }

  res.setHeader("Content-Type", "text/html");
  res.end();

}

function accept(req, res) {

  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache'
  });
  
  if( i < last ){
	res.write(mydata[i]);
  }
  res.end();
}

http.createServer(index).listen(8080);
