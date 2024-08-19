const inputCity = document.querySelector("#inputCity");
const temperature = document.querySelector("#parTemperature");
const country = document.querySelector("#parCountry");
const date = document.querySelector("#parDate");
const feelsLike = document.querySelector("#parFeelsLike");
const conditions = document.querySelector("#parConditions");
const variation =document.querySelector("#parVariation"); 

api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "21e57016c507ca12eb2d7558d93c77ca"
}

inputCity.addEventListener('keydown', enterInput);

function enterInput(e) {
    if (e.keyCode === 13) {
        getInfo(inputCity.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result) {
    country.textContent = `${result.name}, ${result.sys.country}`;
    temperature.textContent = `${Math.round(result.main.temp)} °`;
    feelsLike.textContent = `Feels like:` + " " + `${Math.round(result.main.feels_like)} °`;
    conditions.textContent = `${result.weather[0].main}`;
    variation.textContent = `Min:` + " " + `${Math.round(result.main.temp_min)} °` + " " + `Max:` + " " + `${Math.round(result.main.temp_max)} °`;
    getOurDate();
}

function getOurDate() {
    const myDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day= days[myDate.getDay()];
    let date = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    parDate.textContent = `${day} ${date} ${month} ${year}`;
} 



