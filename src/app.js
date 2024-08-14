var http = require('http');
const { env } = require('process');
const url = require('url');
const fs = require('fs');
const path = require('path');

var server = http.createServer(function(request, response) {

    var reqUrl = url.parse(request.url,true);
    if(reqUrl.pathname != null && reqUrl.pathname.indexOf(process.env.context) !== -1){
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
                     if (err) {
                       response.writeHead(500, {'Content-Type': 'text/plain'});
                       response.end('Internal Server Error');
                     } else {
                       response.writeHead(200, {'Content-Type': 'text/html'});
                       const pageTitle = 'Node.js 22 without Express';
                       const pageBody = 'Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)';
                       let html = data.toString();
                       html = html.replace('<title></title>', `<title>${pageTitle}</title>`);
                       html = html.replace('<p></p>', `<p>${pageBody}</p>`);
                       response.end(html);
                     }
                   });
    }else {
        response.writeHead(404);
        response.end("Not found");
    }
});

var port = process.env.port || 3005;
server.listen(port);
module.exports = server
console.log("Server running on Port:", port);
