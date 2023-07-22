let date = document.querySelector("#date");
let currentTime = new Date();

let hour = currentTime.getHours();
let minute = currentTime.getMinutes();


let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = weekDays[currentTime.getDay()];

date.innerHTML = `${day} ${hour}:${minute}`;



