const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

const {ROLLBAR_TOKEN, PORT} = process.env

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {home, homeCss} = require("./controllers")
app.get("/", home )
app.get("/css", homeCss)













app.listen(PORT, () => console.log(`Server is up on ${PORT}`))