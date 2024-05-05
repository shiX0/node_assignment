const express = require('express')
const dotenv = require('dotenv')
const ConnectiontToDb = require('./database/ConnectiontToDb')

const app = express()


//json config
app.use(express.json())

// configuring dotenv
dotenv.config()

// conneting to the databese
ConnectiontToDb().then(() => {
    console.log("database connected sucessfully")
})

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))


app.use('/api/create', require('./routes/contactRoutes'))
app.use('/api/reservations', require('./routes/reservationRoutes'))
app.use('/api/book-appointment', require('./routes/appoinmentRoutes'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))