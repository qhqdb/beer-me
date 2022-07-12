const fetchBreweries = (input) => {
    return fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
    .then((response) => response.json())
  }

var abvLessInputBtn = document.querySelector('.abvLess')
var abvGreaterInputBtn = document.querySelector('abvGreater')
var beerSearchTerm = document.querySelector('beerSearch')
var beerResults = document.querySelector('beerContainer')

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var beerName = beerSearchTerm.value.trim();
  
    if (beerName) {
      getBeer(beerName);
      beerSearchTerm.value = '';
    } else {
      alert('Please enter beer name');
    }
};

var getBeer = function (user) {
    var apiUrl = 'https://api.punkapi.com/v2/beers?beer_name=' + beerName;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                displayBeer(data, user);
            });
        } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
        alert('Unable to find beer');
    });
};

var displayBeer = function (beers, beerSearchTerm) {
    if (beers.length === 0) {
      beerResults.textContent = 'No repositories found.';
      return;
    }

    beerSearchTerm.textContent 

    for (var i = 0; i < beers.length; i++) {
        var repoName = repos[i].owner.login + '/' + repos[i].name;
    
        var repoEl = document.createElement('a');
        repoEl.classList = 'list-item flex-row justify-space-between align-center';
        repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);
    
        var titleEl = document.createElement('span');
        titleEl.textContent = repoName;
    
        repoEl.appendChild(titleEl);
    
        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';
    
        if (repos[i].open_issues_count > 0) {
          statusEl.innerHTML =
            "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
        } else {
          statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }
    
        repoEl.appendChild(statusEl);
    
        repoContainerEl.appendChild(repoEl);
      }
    };





//   document.addEventListener('DOMContentLoaded', () => {
//     const startBtn = document.querySelector('.beerBtn')
//     const randomBeer = document.querySelector('.random-beer')
//     const descriptionDisplay = document.querySelector('.description')

//     function getData(e) {
//         e.preventDefault()

//         fetch('https://api.punkapi.com/v2/beers/random')
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data)
//             const name = data[0].name
//             const abv = data[0].abv
//             const description = data[0].description

//             randomBeer.innerHTML = name + '  ' + abv
//             descriptionDisplay.innerHTML = description
//         })
//     }

//     startBtn.addEventListener('click',getData)

// })

// var hpBeer = document.querySelector("#homePageBeer")

// function backToHome(){
//     document.location.href="index.html"
// }

// hpBeer.addEventListener("click", backToHome)