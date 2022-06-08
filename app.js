
//const searchText = document.getElementById("search")
const formDiv = document.querySelector("#form_div")
const gifArea = document.querySelector("#gif_area")
const search = document.querySelector("#search")
//Remember to replace
const apiKey = "RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC"
const rating = "g"
const limit = "9"

formDiv.addEventListener("submit", handleFormSubmit)

async function getResults() {

    //Gettting search text from html
    searchText = document.getElementById("search").value

    console.log("searchText is: " + searchText)
    
    //Fetching from API
    let response = await fetch("http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchText + "&rating=" + rating + "&limit=" + limit)
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

}

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
    search.value = ''
}


function handleFormSubmit(event)
{
    //prevent webpage from reloading
    event.preventDefault()
    //Reloading gif area after a new search
    if(gifArea)
    {
        gifArea.innerHTML = ''
    }
    getResults();

}