const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

const {PORT} = process.env

const {getAllNames} = require("./backEndFunc")
const {home, homeCss, homeJs} = require("./controllers")
app.get("/", home )
app.get("/css", homeCss)
app.get("/names", getAllNames)
app.get("/js", homeJs )















app.listen(PORT, () => console.log(`Server is up on ${PORT}`))