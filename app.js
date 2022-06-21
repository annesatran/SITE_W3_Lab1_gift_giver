const express = require("express");
const morgan = require("morgan")

const app = express();

module.exports = app;

app.use(morgan('tiny'));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({"ping":"pong"})
})