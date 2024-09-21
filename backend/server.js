const express = require('express')
const mongoose = require('mongoose')
const projectRoutes = require('./routes/projects')
const userRoutes = require('./routes/user')
const { createContact } = require('./controllers/contactController')

const cors = require('cors')
const requireAuth = require('./middleware/requireAuth')

require('dotenv').config()

// express app
const app = express()

// middleware (for POST and PATCH requests)
app.use(express.json())
// configure cors options

app.use(cors(), (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routesc
app.use('/api/user', userRoutes)
app.post('/api/contact', createContact)

// require authentication for the next routes
app.use(requireAuth)
app.use('/api/projects', projectRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db, listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
})

