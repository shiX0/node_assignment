const ReservationModel = require('../models/reservationModel')

const createReservation = async (req, res) => {
    const { userId, date, numberOfGuests } = req.body;
    if (!userId || !date || !numberOfGuests) {
        return res.json(
            {
                "sucess": false,
                "message": "please enter all fields!"
            }
        )
    }
    // checking if date is in format and is in future
    else if (date) {
        const parsedDate = new Date(date);
        const currentDate = new Date();
        // console.log(parsedDate.getTime(),currentDate.getTime());
        // Check if the date is in the correct format (YYYY-MM-DD) and is in the future
        if (isNaN(parsedDate.getDate()) || parsedDate < currentDate) {
            return res.json({
                "success": false,
                "message": "Please enter a valid date in the future (YYYY-MM-DD)!"
            });
        }

    }
    try {
        
        // saving the data
        const newReservation = new ReservationModel({
            userId: userId,
            eventDate: date,
            numberOfGuests: numberOfGuests
        })
        await newReservation.save()

        res.json({
            "success": true,
            "message": "Reservation created sucessfully",
            "reservation": date,
        })

    }
    catch (error) {
        console.log(error);
        res.json({
            "sucess": false,
            "message": "Internal server error"
        })
    }
}

module.exports = createReservation