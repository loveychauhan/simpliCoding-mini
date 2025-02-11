const climate = {
    Wind: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/wind.png?raw=true',
    Snow: 'https:github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/snow.png?raw=true',
    Rain: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/rain.png?raw=true',
    Mist: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/mist.png?raw=true',
    Humid: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/humidity.png?raw=true',
    Haze: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/haze.png?raw=true',
    Drizzle: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/drizzle.png?raw=true',
    Clouds: 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/clouds.png?raw=true',
    'Clear': 'https://github.com/sadanandpai/frontend-mini-challenges/blob/main/apps/javascript/src/challenges/weather-app/images/clear.png?raw=true'

}

const weatherDisplay = document.querySelector('.feature-content-box');
const locationName = document.querySelector('.search-field');
const userInput = document.querySelector('.user-input');

locationName.addEventListener('submit', (e) => {
    e.preventDefault()
    let cityName = e.srcElement[0].value
    callLocation(cityName)
})
async function callLocation(cityName) {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=46d47581a51a79782741111953e700af`);
        let data = await res.json();
        if (cityName !== data.name) {
            weatherDisplay.innerHTML = `<p>Invalid City Name</p>`
        }
        console.log(data)
        let climateDescription = data.weather[0].main;
        weatherDisplay.innerHTML = `<img class="climateImg" src="${climate[climateDescription]}" alt="">
                <h1 class="temp">${data.main.temp} °C</h1>
                <h2 class="location">${data.name}</h2>
                <div class="extra-feature">
                    <div class="humidity">
                        <p class="humidity-count">${data.main.humidity}%</p>
                        <img src="${climate['Humid']}" alt="">
                        <p class="feature-label">Humidity</p>
                    </div>
                    <div class="windSpeed">
                        <p class="windSpeed-count">${data.wind.speed} Km/h</p>
                        <img src="${climate['Wind']}" alt="">
                        <p class="feature-label">wind Speed</p>
                    </div>`
    }
    catch (error) {
        console.log('There is a error while loading', error)
    }

}

