const express = require("express");
const router = express.Router();

const getCycles = require('../controllers/cycles')

router.route("/").get(getCycles);

module.exports = router;
