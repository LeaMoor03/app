let date = document.querySelector("#date");
let currentTime = new Date();

let hour = currentTime.getHours();
let minute = currentTime.getMinutes();


let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = weekDays[currentTime.getDay()];

date.innerHTML = `${day} ${hour}:${minute}`;


function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
let minutes = date.getMinutes();
if (hours <10) {
    hours = `0${hours}`;
}
if (minutes <10) {
    minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}



  function displayTemperature(response) {
    let iconElement = document.querySelector("#main-icon");

    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#current-forcast").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      iconElement.setAttribute("alt", response.data.weather[0].description);
    
  }


let apiKey = "1d86c5d4e2dfc784a979801c54b2b2f4";
let city = "New York";
let apiUrl =  ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

