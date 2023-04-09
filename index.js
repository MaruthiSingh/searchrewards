//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const c = require("chinpunkanpun");
const opn = require("opn");

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/main.html");

});

app.post("/", function (req, res) {

    for (let i = 0; i < 30; i++) {
        opn("https://www.bing.com/search?q=" + c.sentence())
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