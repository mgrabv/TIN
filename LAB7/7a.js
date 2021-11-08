//Server for task A.

const http = require("http");
const url = require("url");
const _port = 8000;  //Specify the port number...

http.createServer(function(request, response) {
    const urlObject = url.parse(request.url, true);
    const urlPath = urlObject.pathname;
    const a = parseInt(urlObject.query.a);
    const b = parseInt(urlObject.query.b);

    if (isNaN(a) || isNaN(b)) {
        response.writeHead(400, "Bad request, one or both parameters do not exist.");
        response.write("");
    }

    response.writeHead(200, {"Content-Type": "text/html"});
    
    switch(urlPath) {
        case "/add":
            response.write(a + " + " + b + " = " + (a + b));
            break;
        case "/sub":
            response.write(a + " - " + b + " = " + (a - b));
            break;
        case "/mul":
            response.write(a + " * " + b + " = " + (a * b));
            break;
        case "/div":
            if (b == 0) {
                response.writeHead(406, {"Content-Type": "text/html"});
                response.write("Cannot divide by 0, try changing the second parameter.");
            }
            else {
                response.write(a + " / " + b + " = " + (a / b));
            }
            break;
        default:
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("The request could not be resolved...");
    }
    
    response.end();

}).listen(_port);