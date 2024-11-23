//Select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const conditions = document.querySelector('#cur-conditions');
const weatherIcon = document.querySelector('#weather-icon');
const forecast = document.querySelector('#forecast');

//Declare const variable assigned to a valid URL string from openweathermap API documentation
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.457&lon=-111.776&units=imperial&appid=57a87d97169e547afbaf21e0b48b1a3b';

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

function displayResults(data) {
    // Display rounded temperature (from the first entry, as current temp is not directly available in forecast)
    currentTemp.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;

    // Icon source URL (from the first entry)
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

    // Capitalize the description (from the first entry)
    const desc = data.list[0].weather[0].description.charAt(0).toUpperCase() + data.list[0].weather[0].description.slice(1);

    conditions.innerHTML = desc;

    // Attributes for the icon
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('id', 'weather-icon');

    const conditionsContainer = document.getElementById('conditions');
    conditionsContainer.appendChild(weatherIcon);

    const forecastMap = {};

    data.list.forEach(entry => {
        const date = new Date(entry.dt * 1000).toLocaleDateString();
        const maxTemp = Math.round(entry.main.temp_max);
        const minTemp = Math.round(entry.main.temp_min); 

        if (!forecastMap[date]) {
            forecastMap[date] = { max: maxTemp, min: minTemp };

        } else {
            forecastMap[date].max = Math.max(forecastMap[date].max, maxTemp);
            forecastMap[date].min = Math.min(forecastMap[date].min, minTemp);
        }
    });


    // Generate three-day forecast (using the first three forecast entries)
    const threeDayForecast = Object.entries(forecastMap).slice(0 ,3).map(([date, temps]) => {
        return `<p class="forecast-item">${date}: High ${temps.max}℉, Low ${temps.min}℉`;

    }).join('<br>');
        

    console.log('Three Dya Forecast:', threeDayForecast);

    forecast.innerHTML = threeDayForecast;
}