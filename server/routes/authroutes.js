const express = require("express");
const router = express.Router();

const {signup, approve,getRequests} = require('../controllers/auth')

router.route("/requests").get(getRequests);
router.route("/signup").post(signup);
router.route("/approve/:id").put(approve);

module.exports = router;
