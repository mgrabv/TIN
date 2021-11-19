const express = require("express");
const body_parser = require("body-parser");
const app = express();
const _port = 8080;     //Specify the port.

app.set("view engine", "ejs");

app.use(body_parser.urlencoded({
  extended: true
}));

app.use(body_parser.json());

app.listen(_port, function() {console.log(`Listening on http://localhost:${_port}`)});

app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/form", (req, res) => res.render("form"));

app.post("/formdata", (req, res) => res.render("formdata", {
    music: req.body.music,
    movie: req.body.movie,
    game: req.body.game
}));

app.post("/jsondata", (req, res) => res.render("formdata", {
    music: req.body.music,
    movie: req.body.movie,
    game: req.body.game
}));