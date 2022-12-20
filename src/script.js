function formaDate(date) {
    let hours = date.getHours();
    if (hours < 10) {

    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    let currentDay = date.getDay();
    let days =  [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    
    ];
    let day = days[currentDay];
    return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formaDate(currentTime);

function showWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
  }
  function searchCity(city) {
    var apiKey = "2914d1bf3afb407f82e13850a08b2f75";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
    axios.get(apiUrl).then(showWeatherCondition);
  }
  function handleSubmit(event) {
    event.preventDefault();
    var city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  function searchLocation(position) {
    var apiKey = "2914d1bf3afb407f82e13850a08b2f75";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(position.coords.latitude, "&lon=").concat(position.coords.longitude, "&appid=").concat(apiKey, "&units=metric");
    axios.get(apiUrl).then(showWeatherCondition);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  var searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
  var currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  searchCity("Lagos");
  

function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 32;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 12;
  }

  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);