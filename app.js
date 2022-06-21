const express = require("express");
const morgan = require("morgan")
const router = require("./routes/gift-exchange")

const app = express();

module.exports = app;

app.use(morgan('tiny'));
app.use(express.json());
app.use("/gift-exchange", router)


app.get("/", (req, res) => {
    res.status(200).send({"ping":"pong"})
})

router.get("/gift-exchange", (req, res) => {
    res.status(200).json(res.body);
})
