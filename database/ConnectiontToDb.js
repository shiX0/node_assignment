const mongoose = require("mongoose");

const ConnectiontToDb = () => mongoose.connect(process.env.mongodb_url)

module.exports = ConnectiontToDb