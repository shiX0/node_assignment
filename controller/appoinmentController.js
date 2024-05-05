const AppoinmentModel = require('../models/appoinmentModel')

const createAppoinmnet = async (req, res) => {
    const { date, time } = req.body;
    // console.log(req.body);
    if (!date || !time) {
        return res.json({
            "success": false,
            "message": "Please enter both date and time fields!"
        });
    }
    // checking if date is in format and is in future
    else if (date) {
        const parsedDate = new Date(date);
        const currentDate = new Date();
        // console.log(parsedDate.getTime(),currentDate.getTime());
        // Check if the date is in the correct format (YYYY-MM-DD) and is in the future
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
        if (isNaN(parsedDate.getDate()) || parsedDate < currentDate || !isValid) {
            return res.json({
                "success": false,
                "message": "Please enter a valid date and in the future (YYYY-MM-DD) & (HH:MM)!"
            });
        }

    }
    try {
        // Checking existing Phone Numbers
        const ExixtingAppointment = await AppoinmentModel.findOne({ time: time });
        if (ExixtingAppointment) {
            return res.json(
                {
                    "sucess": false,
                    "message": "Appointment in given time is unavailable!"
                }
            )
        }
        // saving the data
        const newAppointment = new AppoinmentModel({
            date: date,
            time: time
        })
        await newAppointment.save()

        res.json({
            "success": true,
            "message": "Reservation created sucessfully",
            "reservation": date,
        })

    }
    catch (error) {
        console.log(error);
        res.json({
            "success": false,
            "message": "Internal server error"
        })
    }
}

module.exports = createAppoinmnet