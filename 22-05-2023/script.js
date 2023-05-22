const apiKey = "31c1c8ec012145c49dd130128232205";

function getWeatherData(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.current);
}

function displayWeather(city, temperature) {
    const weatherContainer = document.getElementById("weather-container");
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    const location = document.createElement("div");
    location.classList.add("weather-location");
    location.textContent = city;

    const temp = document.createElement("div");
    temp.classList.add("weather-temperature");
    temp.textContent = `${temperature} °C`;

    weatherCard.appendChild(location);
    weatherCard.appendChild(temp);
    weatherContainer.appendChild(weatherCard);

}

document.getElementById("city-input").addEventListener("change", function () {
    const city = this.value.trim();
    if (city !== "") {
        getWeatherData(city)
            .then(data => {
                const temperature = data.temp_c;
                displayWeather(city, temperature);
            })
            .catch(error => {
                console.log("Errore:", error);
            });
    }
});
{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
}


