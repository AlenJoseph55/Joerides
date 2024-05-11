const express = require("express");
const router = express.Router();
const upload = require("../middlewares/imagehandler");


const {getCycles,createCycles,deleteCycle, getCycle} = require('../controllers/cycles')

const uploadMiddleware = upload.single("image");

router.route("/").get(getCycles);
router.route("/:id").get(getCycle);
router.route("/").post(uploadMiddleware,createCycles);
router.route("/:id").delete(deleteCycle);

module.exports = router;
