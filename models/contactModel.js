const { default: mongoose } = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Phone: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        }
    }

)
const Contact = mongoose.model("Contact", ContactSchema)
module.exports = Contact
