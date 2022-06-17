let weather = {
  apiKey: "50cd22cf58af309fb94f97cf188b6b74",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { icon, description } = data.weather[0];

    console.log(name, temp, humidity, speed, description, icon);

    document.querySelector(".card").classList.replace("h-30", "h-80");

    document.querySelector(".city").innerHTML = name;
    document.querySelector(".temp").innerHTML = temp + " &deg;C";
    document.querySelector(".humidity").innerHTML = "Humidity : " + humidity;
    document.querySelector(".wind").innerHTML = "Wind Speed : " + speed;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".desc").innerHTML = description;
    document.querySelector(".weather").classList.remove("loading");

    document.querySelector(".search-bar").value = "";

    if (data.weather[0].icon[2] == "n") {
      document
        .querySelector(".weather")
        .classList.replace("bg-blue-400/75", "bg-gray-600/75");
    } else if (data.weather[0].icon[2] == "d") {
      document
        .querySelector(".weather")
        .classList.replace("bg-gray-600/75", "bg-blue-400/75");
    }
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", (e) => {
  e.preventDefault();
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    weather.search();
  }
});
