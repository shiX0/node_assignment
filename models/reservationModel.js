const { default: mongoose } = require("mongoose");

const ReservationSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true
        },
        eventDate: {
            type: Date,
            required: true
        },
        numberOfGuests: {
            type: Number,
            required: true
        }
    }

)
const Reservation = mongoose.model("Reservations", ReservationSchema)
module.exports = Reservation
