const apiKey = "f91be24407f30f7ac8425f2f8327595e";


const searchBtn =
  document.getElementById("searchBtn");

const cityInput =
  document.getElementById("cityInput");


// SEARCH BUTTON

searchBtn.addEventListener("click", () => {

  const city = cityInput.value;

  getWeather(city);

});


// ENTER KEY SUPPORT

cityInput.addEventListener("keypress", (event) => {

  if (event.key === "Enter") {

    const city = cityInput.value;

    getWeather(city);

  }

});


// MAIN FUNCTION

async function getWeather(city) {

  if (city === "") {

    alert("Please enter a city");

    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);


    // INVALID CITY

    if (data.cod == 404) {

      alert("City not found");

      return;
    }


    // UPDATE WEATHER DETAILS

    document.getElementById("cityName").innerText =
      data.name;

    document.getElementById("temperature").innerText =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("description").innerText =
      data.weather[0].description;

    document.getElementById("humidity").innerText =
      `Humidity: ${data.main.humidity}%`;

    document.getElementById("wind").innerText =
      `Wind: ${data.wind.speed} km/h`;


    // WEATHER ICON

    const iconCode =
      data.weather[0].icon;

    const iconUrl =
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weatherIcon").src =
      iconUrl;


    // DYNAMIC BACKGROUND

    const weather =
      data.weather[0].main;

    console.log(weather);


    // CLEAR

    if (weather === "Clear") {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')";

    }


    // CLOUDS

    else if (weather === "Clouds") {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600')";

    }


    // RAIN

    else if (weather === "Rain") {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1600')";

    }


    // THUNDERSTORM

    else if (weather === "Thunderstorm") {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1600')";

    }


    // SNOW

    else if (weather === "Snow") {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=1600')";

    }


    // MIST / HAZE / FOG

    else if (
      weather === "Mist" ||
      weather === "Fog" ||
      weather === "Haze"
    ) {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=1600')";

    }


    // DEFAULT

    else {

      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600')";

    }

  }

  catch (error) {

    console.log(error);

    alert("Something went wrong");

  }

}