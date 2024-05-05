const mongoose = require("mongoose");

const AppoinmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const Appoinment = mongoose.model("Appoinment", AppoinmentSchema);

module.exports = Appoinment;
