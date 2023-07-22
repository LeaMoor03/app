let date = document.querySelector("#date");
let currentTime = new Date();

let hour = currentTime.getHours();
let minute = currentTime.getMinutes();


let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = weekDays[currentTime.getDay()];

date.innerHTML = `${day} ${hour}:${minute}`;


  function displayTemperature(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#current-forcast").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML =Math.round(response.data.wind.speed);
  }


let apiKey = "1d86c5d4e2dfc784a979801c54b2b2f4";
let apiUrl =  ` https://api.openweathermap.org/data/2.5/weather?q=GreenLand&appid=${apiKey}&units=metric`

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

