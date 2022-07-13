// Home page JS Start. Start with creating the javscript to allow users to navigate to the beer/brewery page based on which button they chose.

var brewbtn = document.querySelector("#breweryBtn")
var beerbtn =  document.querySelector("#beerBtn")

function clickBrewery(){
    window.location.href="./html/brewery.html"
}

function clickBeer(){
    window.location.href="./html/beer.html"
}

brewbtn.addEventListener("click" ,clickBrewery )
beerbtn.addEventListener("click",clickBeer )

