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
    const startBtn = document.querySelector("#randomBrew")
    const randomBrew = document.querySelector(".random-brew")
    const brewType = document.querySelector(".brewType")
    const streetAddress = document.querySelector(".streetAddress")
    const stateBrew = document.querySelector(".state")
    const zipcode = document.querySelector(".zipCode")
    
    // const descriptionDisplay = document.querySelector(".descriptionbrew")

    function getData(e){
        e.preventDefault()
        
        fetch('https://api.openbrewerydb.org/breweries/random',{
            cache: "no-cache" // First time we ran this, it was saving the brewery so William came in and said we had to use this line of code so when we click "Random" it does pulled the saved aray.
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            const name = data[0].name
            // console.log(name)
            const brewery_type = data[0].brewery_type
            // console.log(brewery_type)
            const state = data[0].state
            // console.log(state)
            const street = data[0].street
            // console.log(street)
            const postal_code = data[0].postal_code

            // randomBrew.innerHTML = 'Name:'+ ' ' + name + ' ' + 'Brew Type:'+ ' ' + brewery_type + ' ' + 'Street Address:'+ street + ' ' +'State:' +' '+ state
            randomBrew.innerHTML = 'Name:'+ ' ' + name + ' '
            brewType.innerHTML = 'Brew Type:'+ ' ' + brewery_type + ' '
            streetAddress.innerHTML =  'Street Address:'+ ' '+ street + ' '
            zipcode.innerHTML = 'Zip Code:'+ ' ' + postal_code
            stateBrew.innerHTML = 'State:' +' '+ state
        })

        
    }
    startBtn.addEventListener('click', getData)
})

var hpBrew = document.querySelector("#homePageBrew")

function backToHome(){
    document.location.href="index.html"
}

hpBrew.addEventListener("click", backToHome)

// Form Elements, Test Jquery to target input element,

function isChecked(checkornot){
    if (document.getElementById(checkornot).checked){
        document.getElementById("info")
        console.log("checked")
    }
    else {
        document.getElementById("info");
        console.log("notChecked")
    }
}

function checkType(type) {

}