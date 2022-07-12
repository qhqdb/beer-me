document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beerBtn')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')

    function getData(e) {
        e.preventDefault()

        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const name = data[0].name
            const abv = data[0].abv
            const description = data[0].description

            randomBeer.innerHTML = name + '  ' + abv
            descriptionDisplay.innerHTML = description
        })
    }

    startBtn.addEventListener('click',getData)

})

var hpBeer = document.querySelector("#homePageBeer")

function backToHome(){
    document.location.href="index.html"
}

hpBeer.addEventListener("click", backToHome)