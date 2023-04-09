//jshint esversion: 6

import open, { openApp, apps } from 'open';
const express = require("express");
const bodyParser = require("body-parser");
const c = require("chinpunkanpun");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("main");
});

app.post("/", async function (req, res) {

    for (let i = 0; i < 30; i++) {
        await open("https://www.bing.com/search?q=" + c.sentence())
            .then(() => {
                console.log(c.sentence());
            })
            .catch((err) => {
                console.error(err);
                prompt("Error");
            });
    }
});

app.listen(3000);