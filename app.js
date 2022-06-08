
//const searchText = document.getElementById("search")
const formDiv = document.querySelector("#form_div")
const gifArea = document.querySelector("#gif_area")
const search = document.querySelector("#search")
const moreButton = document.querySelector("#more_button")

//Remember to replace apiKey
const apiKey = "RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC"
const rating = "g"
const limit = 9

//Number of times GIFs have been loaded
let pages = 0
let searchText = ""


formDiv.addEventListener("submit", handleFormSubmit)
moreButton.addEventListener("click", getResults)

//Gets results from API
async function getResults() {
    //Gettting search text from html

    console.log("searchText is: " + searchText)

    //Fetching from API
    let response = await fetch("http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchText+ "&rating=" + rating + "&limit=" + limit + "&offset=" + pages * limit)
    // console.log("url is: " + "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchText + "&rating=" + rating + "&limit=" + limit)
    // console.log("response is: ")
    // console.log(response)

    //Getting JSON from API response
    let responseData = await response.json()
    // console.log("responseData is: ")
    // console.log(responseData)
    // console.log("A url is: " + responseData.data[0].images.original.url)

    //displaying results
    displayResults(responseData.data)
    pages++

    moreButton.classList.remove("hidden")

}

//Displays results from API
function displayResults(response) {
    //Looping through the data and displaying each gif
    response.forEach((gif) => {
        // console.log(gif.images.original.url)
        gifArea.innerHTML += `
        <img src = ${gif.images.original.url}>
        `
    })

    //Reset search text after displaying results
    // console.log(search.value)
    if (search) {
        search.value = ''
    }

}

//Handles the initial search or a new search
function handleFormSubmit(event) {
    pages = 0
    searchText = document.getElementById("search").value

    //prevent webpage from reloading

    event.preventDefault()
    //Reloading gif area after a new search
    if (gifArea) {
        gifArea.innerHTML = ''
    }
    getResults();

}

//Test for branch