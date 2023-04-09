//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const c = require("chinpunkanpun");
const ejs = require("ejs");
const open = require("opener");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("main");
});

app.post("/", async function (req, res) {

    for (let i = 0; i < 30; i++) {
        open("https://www.bing.com/search?q=" + c.sentence())
        console.log(c.sentence());
    }
});

app.listen(3000);
