const express = require("express");
const router = express.Router();

const {getactiveRides, createRide, getpastRides} = require('../controllers/rides')

router.route("/active").get(getactiveRides);
router.route("/past").get(getpastRides);
// router.route("/users").get(getUsers);
router.route("/").post(createRide);
// router.route("/login").post(signin);
// router.route("/approve/:id").put(approve);
// router.route("/reject/:id").delete(reject);


module.exports = router;
