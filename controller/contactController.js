const contactModel = require('../models/contactModel')

const createContact = async (req, res) => {
    const { phone, name, email } = req.body;
    if (!phone || !name || !email) {
        return res.json(
            {
                "sucess": false,
                "message": "please enter all fields!"
            }
        )
    }
    try {
        // Checking existing Phone Numbers
        const existingPhone = await contactModel.findOne({ Phone: phone });
        if (existingPhone) {
            return res.json(
                {
                    "sucess": false,
                    "message": "Given phone already exists!"
                }
            )
        }
        // saving the data
        const newContact = new contactModel({
            Phone: phone,
            Name: name,
            Email: email
        })
        await newContact.save()

        res.json({
            "success": true,
            "message": "contact created sucessfully",
            "phone": phone,
            "name": name,
            "email": email
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

module.exports = createContact