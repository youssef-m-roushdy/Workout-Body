const express = require('express');

require('dotenv').config()

const workoutRouts = require('./routes/workouts');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');

const app = express()
//use some middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',workoutRouts)
app.use('/api/user',userRoutes)

//connect to DB
mongoose.connect(process.env.MONG_URI)
.then(() =>{
    app.listen(process.env.PORT, () => {
        console.log(`server is listening on port ${process.env.PORT} and connected to thr database`)
    })
})
.catch((err) => {
    console.log(err)
})

