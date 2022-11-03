const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

const {ROLLBAR_TOKEN, PORT} = process.env

const {getAllNames} = require("./backEndFunc")
const {home, homeCss} = require("./controllers")
app.get("/", home )
app.get("/css", homeCss)
app.get("/names", getAllNames)


try {
    aldkfjadlkfj()
} catch {
    rollbar.error('Something went wrong')
}













app.listen(PORT, () => console.log(`Server is up on ${PORT}`))