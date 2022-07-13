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

//user input search

var beerSearch =document.querySelector('#beerSearch')
var apvGreaterInput = document.querySelector('#abvGreater')
var apvLesserInput = document.querySelector('#abvLesser')
var beerInput = document.querySelector('#beerInput')
var beerResults =document.querySelector('#beerResults')

var formSubmitHandler = function (event) {
    event.preventDefault();

    var beerName = beerInput.value.trim();
    getBeer(beerName);

};

var getBeer = function (beer) {
    var apiUrl = 'https://api.punkapi.com/v2/beers?beer_name=' + beerName;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                displayBeer(data, beer);
            });
        } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
        alert('Unable to find beer');
    });
};

var displayBeer = function (beers, SearchTerm) {
    if (beers.length === 0) {
      beerResults.textContent = 'No beers found.';
      return;
    }

    beerSearchTerm.textContent = searchTerm

    for (var i = 0; i < beers.length; i++) {
        var searchedBeers = beers[i].name + '/' + beers[i].abv + 'ABV';
        var searchedDescription = beers[i].description

        var beerTitle = document.createElement('span');
        var beerDescription = document.createElement('span');
        beerTitle.textContent = searchedBeers;
        beerDescription.textContent = searchedDescription;
    
        beerTitle.appendChild(beerDescription);
        beerResults.appendChild(beerTitle);
    
      }
    };

beerSearch.addEventListener('submit', formSubmitHandler);


var hpBeer = document.querySelector("#homePageBeer")

function backToHome(){
    // console.log("startingbacktohome")
    // console.log(window.location.href)
    window.location.replace("../index.html")
    // console.log(window.location.href)

}


hpBeer.addEventListener("click", backToHome)
