const router = require('express').Router()
const createAppoinmnet = require('../controller/appoinmentController')

router.post('/', createAppoinmnet)

module.exports = router