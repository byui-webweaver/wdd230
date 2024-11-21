//Select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const conditions = document.querySelector('#cur-conditions');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');

//Declare const variable assigned to a valid URL string from openweathermap apo documentation
const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=40.457&lon=-111.776&units=imperial&appid=57a87d97169e547afbaf21e0b48b1a3b';

//Define asynchronous function named apiFetch with try block for errors

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); //call displayResults here
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}

apiFetch();

function displayResults (data) {
    //Display rounded temperature
    currentTemp.innerHTML = `${Math.round(data.current.temp)}&deg;F`;

    //icon sourse URL
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;

    //Capitalize the description
    const desc = data.current.weather[0].description.charAt(0).toUpperCase() + data.current.weather[0].description.slice(1);

    conditions.innerHTML = desc;

    //Attributes for the icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    //Set caption text
    captionDesc.textContent = desc;

    const threeDayForecast = data.daily.slice(1, 4).map(day => `${Math.round(day.temp.day)}℉`).join(', ');
    forecast.innerHTML = threeDayForecast;
    
}
