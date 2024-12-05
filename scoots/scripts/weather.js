const highTemp = document.querySelector('#high-temp');
const closeBannerButton = document.getElementById('close-banner');
const weatherBanner = document.getElementById('weather-banner');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.508&lon=-86.946&appid=384a2edb7c93680cf99d1c73c465c0f3&units=imperial';

async function fetchTemperature() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        //High Temp 
        const maxTemp = Math.round(data.main.temp_max);
        highTemp.textContent = `${maxTemp}℉ `;
    } catch (error) {
        console.error('Error fetching the weather data', error);
    }
}

//Close Banner
function closeBanner() {
    weatherBanner.style.display = 'none'; // Hides the banner
}

//Event Listener for close button
closeBannerButton.addEventListener('click', closeBanner);

//Fetch the temperature
fetchTemperature();