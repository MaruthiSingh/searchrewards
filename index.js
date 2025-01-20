//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const c = require("chinpunkanpun");
const ejs = require("ejs");
const open = require("opener");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.render("main");
});

app.post("/", async function (req, res) {

    const num = Number(req.body.num)

    for (let i = 0; i < num; i++) {
        open("https://www.bing.com/search?q=" + c.sentence())
    }
});

app.listen(process.env.PORT || 3000);
module.exports = app;
