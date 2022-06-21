const express = require("express")
const router = express.Router()

module.exports = router;

router.post("/pairs", async (req, res) => {
    res.status(200).json(req.body);
});

router.post("/traditional", async (req, res) => {
    res.status(200).json(req.body)
});