
//const searchText = document.getElementById("search")
const formDiv = document.querySelector("#form_div")
const gifArea = document.querySelector("#gif_area")
//Remember to replace
const apiKey = "RNtYFS9Q4vYDV1E5LLJsw58nQdlOZReC"
const rating = "g"
const limit = "9"

formDiv.addEventListener("submit", getResults)

async function getResults(event) {
    event.preventDefault()
    searchText = document.getElementById("search").value

    console.log("searchText is: " + searchText)

    let response = await fetch("http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchText + "&rating=" + rating + "&limit=" + limit)
    console.log("url is: " + "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchText + "&rating=" + rating + "&limit=" + limit)
    console.log("response is: ")
    console.log(response)

    let responseData = await response.json()
    console.log("responseData is: ")
    console.log(responseData)
    console.log("A url is: " + responseData.data[0].images.original.url)

    displayResults(responseData.data)

}

function displayResults(response)
{
    response.forEach((gif) => {
        console.log(gif.images.original.url)
        gifArea.innerHTML += `
        <img src = ${gif.images.original.url}>
        `
    })
}