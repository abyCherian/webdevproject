const btnEl = document.getElementById("btn")
let jokeEL = document.getElementById("joke")

const apiKey = "jSOkhJ8UG5ifqIuR0r5dGw==L7oeiKwm40WHlk0O"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key" : apiKey
    }
}

let apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){
    
    jokeEL.innerText = "Updating.."
    let response = await fetch(apiURL, options);
    let data = await response.json();
    
    jokeEL.innerText = data[0].joke;


}

btnEl.addEventListener("click", getJoke)

#Added a new comment