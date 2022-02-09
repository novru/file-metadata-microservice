const express = require("express");
const router = express.Router();

const { fileHandler } = require("../controllers/file-metada")

router.route("/fileanalyse").post(fileHandler)

module.exports = router;