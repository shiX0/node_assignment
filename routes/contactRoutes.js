const router = require("express").Router();
const createContact = require("../controller/contactController");

router.post('/', createContact)

module.exports = router
