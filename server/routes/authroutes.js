const express = require("express");
const router = express.Router();

const {signup, approve,getRequests,reject,getUsers, signin} = require('../controllers/auth')

router.route("/requests").get(getRequests);
router.route("/users").get(getUsers);
router.route("/signup").post(signup);
router.route("/login").post(signin);
router.route("/approve/:id").put(approve);
router.route("/reject/:id").delete(reject);


module.exports = router;
