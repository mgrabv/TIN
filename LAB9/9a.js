const express = require("express");
const body_parser = require("body-parser");
const app = express();
const _port = 8080;     //Specify the port.
const cors = require("cors");

app.use(cors());

app.use(body_parser.urlencoded({
  extended: true
}));

app.use(body_parser.json());

app.listen(_port, function() {console.log(`Listening on http://localhost:${_port}`)});

app.post("/jsonmath", (req, res) => {
    const num1 = parseInt(req.body.a);
    const num2 = parseInt(req.body.b);
    const op = req.body.op;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = null;
        res.statusCode = 400;
        res.statusMessage = "One or both numbers are undefined.";
        res.send({result});
        return;
    }

    res.status(200);
    switch (op) {
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                res.statusCode = 400;
                res.statusMessage = "Num2 is equal to 0. Cannot divide by 0.";
                result = null;
            }
            else {
                result = num1 / num2;
            }
            break;
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        default:
            res.statusCode = 404;
            res.statusMessage = "There are only 4 operations available: +,-,*,/. Try again."
            result = null;
    }
    res.send({result});
});