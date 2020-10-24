const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const config = require('./config')
const app = express()

//connect to the database using mongoose
mongoose
    .set("useCreateIndex", true)
    .connect( config.url, { useNewUrlParser: true })
    .then(()=>{
        console.log("successfully connected to the database")
    }).catch(err=>{
        console.log(`unable to connect to the database: ${err}`)
    })

//use all installed packages

app.use("/", (req, res)=>{
    res.send('hello')
})
//listen on port 8000
app.listen(port, ()=>{
    console.log(`Listening on port${port}`)
})

module.exports = app