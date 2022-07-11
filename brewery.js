// https://api.openbrewerydb.org/breweries/random

// document.addEventListener('DOMContentLoaded', () => 
//     const startBtn = document.querySelector("#randomBrew")
//     const randomBrew = document.querySelector(".random-brew")
//     const descriptionDisplay = document.querySelector(".descriptionbrew")

//     function getData(e) {
//         e.preventDefault()
//         fetch('https://api.openbrewerydb.org/breweries/random')
//             .then(response => {
//             return response.json()
//         })
//             .then(data => {
//             console.log(data)
//             const name = data[0].name
//             // console.log(name)
//             const brewery_type = data[0].brewery_type
//             // console.log(brewery_type)
//             const state = data[0].state
//             // console.log(state)
//             const street = data[0].street
//             // console.log(street)

//             randomBrew.innerHTML = name + ' ' + brewery_type + state + street

//         })

// })

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector(".brewBtn")
    const randomBrew = document.querySelector(".random-brew")
    // const descriptionDisplay = document.querySelector(".descriptionbrew")

    function getData(e){
        e.preventDefault()
        
        fetch('https://api.openbrewerydb.org/breweries/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const name = data[1].name
            const brewery_type = data[1].brewery_type
            // console.log(brewery_type)
            const state = data[1].state
            // console.log(state)
            const street = data[1].street
            // console.log(street)

            randomBrew.innerHTML = name + ' ' + brewery_type + state + street
        })
    }
    startBtn.addEventListener('click', getData)
})

var hpBrew = document.querySelector("#homePageBrew")

function backToHome(){
    document.location.href="index.html"
}

hpBrew.addEventListener("click", backToHome)