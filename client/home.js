const input = document.getElementById("input")
const container = document.getElementById("names-container")

function getNames (evt) {
    evt.preventDefault()
    axios.get("/names")
    .then((res) => {
        let {names} = res.data
         let list = document.createElement('li').innerHTML(names)
         container.appendChild(list)
    })
    .catch((err) => console.log("error on the front end function"))
}

input.addEventListener('click', input)