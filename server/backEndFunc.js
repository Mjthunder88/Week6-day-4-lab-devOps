
const {ROLLBAR_TOKEN} = process.env
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
// rollbar.log('Hello world!')

let names = ["Marcus", "Chris", "Jack"]

module.exports = {
    getAllNames: (req, res) => {
        console.log("This ran")
        // console.log(names)
        res.status(200).send(names)
        rollbar.info("User added")
    }
}