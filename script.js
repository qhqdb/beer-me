// Home page JS Start. Start with creating the javscript to allow users to navigate to the beer/brewery page based on which button they chose.

var brewbtn = document.querySelector("#breweryBtn")
var beerbtn =  document.querySelector("#beerBtn")

function clickBrewery(){
    document.location.href="brewery.html"
}

function clickBeer(){
    document.location.href="beer.html"
}

brewbtn.addEventListener("click" ,clickBrewery )
beerbtn.addEventListener("click",clickBeer )

