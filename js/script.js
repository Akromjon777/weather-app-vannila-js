window.addEventListener("DOMContentLoaded", () => {
  const api = {
    key: "867d0b663239d3bf629e8b97653d71ab",
    api: "https://api.openweathermap.org/data/2.5/",
  };

  const searchBox = document.querySelector(".search-box");

  searchBox.addEventListener("keypress", inputSetQuery);

  function inputSetQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchBox.value);
      console.log(searchBox.value);
    }
  }

  function getResults(query) {
    fetch(`${api.api}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => weather.json())
      .then(displayResults);
  }

  function displayResults(weather) {
    let city = document.querySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".date");
    date.innerHTML = dateBuldier(now);
  
    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.trunc(weather.main.temp)}<span>°c</span>`

    let elWeather = document.querySelector(".weather");
    elWeather.innerHTML = `${weather.weather[0].main}`

    let elhiLow = document.querySelector(".high__low--temp");
    elhiLow.innerHTML = `${Math.trunc(weather.main.temp_min)}°c / ${Math.trunc(weather.main.temp_max)}°c` 
}
  function dateBuldier(a) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[a.getDay()];
    let date = a.getDate();
    let month = months[a.getMonth()];
    let year = a.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
});
