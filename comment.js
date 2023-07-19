// Create web server
// Node.js
// 2018-02-23
// --------------------------------------

// Imports
var http = require('http');
var fs = require('fs');
var url = require('url');

// Server
http.createServer(function (req, res) {
    // Get the path
    var path = url.parse(req.url).pathname;
    // Get the file
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            // Error
            res.writeHead(404);
            res.end("Error: 404 - Page not found");
            return;
        }
        // Else
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);

// Log
console.log("Server running at http://localhost:8080/");