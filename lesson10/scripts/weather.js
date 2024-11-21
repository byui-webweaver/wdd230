//Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//Declare const variable assigned to a valid URL string from openweathermap apo documentation
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6374&units=imperial&appid=384a2edb7c93680cf99d1c73c465c0f3';

//Define asunchronous function named apiFetch with try block for errors

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
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    //icon sourse URL
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    //Capitalize the description
    const capitalizeDescription = (description => {
        return description
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    })
    let desc = data.weather.map(item => capitalizeDescription(item.description)).join(', ');

    //Attributes for the icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    //Set caption text
    captionDesc.textContent = desc;
    
} 
