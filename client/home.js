const input = document.getElementById("input")
const container = document.getElementById("names-container")
const form = document.getElementById("form-submit")

function getNames (evt) {
    evt.preventDefault()
    axios.get("/names")
    .then((res) => {
        let cool = res.data
        // console.log(cool)
        //  let list = document.createElement('p')
        //  list.innerHTML(cool[1])
        //  container.appendChild(list)
    })
    .catch((err) => console.log("error on the front end function"))
}

form.addEventListener("submit", getNames)