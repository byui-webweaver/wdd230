async function getWeather() {
    try {
        // Current weather data
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.508&lon=-86.946&units=imperial&appid=384a2edb7c93680cf99d1c73c465c0f3`);
        const currentWeatherData = await currentWeatherResponse.json();

        // Update current temperature
        const temp = Math.round(currentWeatherData.main.temp);
        document.getElementById('temperature').innerText = `${temp} ℉`;

        // Update current humidity
        const humidity = currentWeatherData.main.humidity;
        document.getElementById('current-humidity').innerText = `${humidity} %`;

        // Weather conditions
        const weatherDescription = currentWeatherData.weather.map(condition => {
            return `${condition.main} - ${condition.description}`;
        }).join(', ');
        
        const weatherIcon = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`;
        document.getElementById('cur-conditions').innerHTML = `${weatherDescription} <img src="${weatherIcon}" alt="Weather Icon">`;

        // Forecast data
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=20,508&lon=-86.946&appid=384a2edb7c93680cf99d1c73c465c0f3&units=imperial`);
        const forecastData = await forecastResponse.json();

        // Find the forecast for tomorrow at 15:00
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); // Get the next day
        tomorrow.setHours(15, 0, 0, 0); // Set to 3 PM (15:00)

        const tomorrowForecast = forecastData.list.find(forecast => {
            const forecastDate = new Date(forecast.dt * 1000);
            return forecastDate.getTime() === tomorrow.getTime();
        });

        // Check if tomorrow's forecast exists
        if (tomorrowForecast) {
            const tomorrowTemp = Math.round(tomorrowForecast.main.temp); // Round forecast temperature
            document.getElementById('forecast').innerText = `${tomorrowTemp} ℉`;
            // Additional information can be displayed if necessary
            const detailedCondition = `${new Date(tomorrowForecast.dt * 1000).toLocaleString()}: ${tomorrowForecast.weather[0].description}`;
            document.getElementById('weather-details').innerText = detailedCondition; // Show only tomorrow's forecast condition
        } else {
            document.getElementById('forecast').innerText = "No forecast available.";
            document.getElementById('weather-details').innerText = ""; // Clear any previous info
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to load the weather data
getWeather();