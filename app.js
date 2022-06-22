const express = require("express");
const morgan = require("morgan")
const router = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express();

module.exports = app;

// MIDDLEWARE

app.use(morgan('tiny'));
app.use(express.json());
app.use("/gift-exchange", router)

app.get("/", (req, res) => {
  res.status(200).send({"ping":"pong"})
})

router.get("/gift-exchange", (req, res) => {
  res.status(200).json(res.body);
})

// Server 404 handler
app.use((req, res, next) => {
  return next(new NotFoundError())
})

// General error handler
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong in the application";
  return res
    .status(status)
    .json( {"error": {"status": status || 500, "message": message }})
})
