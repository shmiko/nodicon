const http = require('http');

const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
	"html":"text/html",
	"jpeg":"image/jpeg",
	"jpg":"image/jpg",
	"png":"image/png",
	"js":"text/javascript",
	"css":"text/css"
}

http.createServer(function(){
	var uri = url.parse(req.url).pathname;
	var filename = path.join(process.cwd(), unescape(uri));
	console.log('Loading', uri);
	var stats;
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });