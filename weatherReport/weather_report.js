const apiKey = '17988a64f05111b5fdac693dfedbc08b';
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2><p>Temperature: ${data.main.temp} &#8451;</p><p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error => {
            console.error('Error fetching weather:', error.message);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

function showwetherDetailsUsingLonLat(event) {
    event.preventDefault();

    const lon = document.getElementById('longitude').value;
    const lat = document.getElementById('latitude').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lon=${lat}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name} using Coordiate</h2>
            <p>Longitude: ${data.coord.lon}</p>
            <p>Latitude: ${data.coord.lat}</p>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error => {
            console.error('Error fetching weather:', error.message);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

var weatherFormUsingCity = document.getElementById('weatherForm');
var weatherFormUsingLonLat = document.getElementById('weatherFormUsingLonLat');

weatherFormUsingCity.addEventListener('submit', showweatherDetails);
weatherFormUsingLonLat.addEventListener('submit', showwetherDetailsUsingLonLat);