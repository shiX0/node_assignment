const  router = require("express").Router();
const createReservation = require("../controller/reservationController");

router.post('/',createReservation)

module.exports=router
