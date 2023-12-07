// https://openweathermap.org/img/wn/04n/

let searchClick = document.getElementById("searchBtn");
searchClick.addEventListener("click", (event) => {
  event.preventDefault()
  let inputBox = document.getElementById("inputBox");

  //resultcontainer
  let cityName = document.getElementById("cityName")
  let temps = document.getElementById("temp");
  let cloudy = document.getElementById("cloudy");
  let humiditys = document.getElementById("humidity");
  let winds = document.getElementById("wind");

  let userInput = !inputBox.value ? alert("pls Enter valid City name") : inputBox.value;


  userInput && fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=c31b0ba68588c7a180bdd13d812c2d3c`).then((resolve) => {
    return resolve.json();
  }).then((data) => {
    let { description, icon } = data.weather[0];
    let { temp, humidity } = data.main;
    let { speed } = data.wind;
    cityName.innerHTML = userInput;
    cloudy.innerHTML = description;
    temps.innerHTML = temp + "°C";
    humiditys.innerHTML = " " + humidity;
    winds.innerHTML = " " + speed + " km/h";
    cityName.style.color = "white";
    document.getElementById("weatherIcon").attributes[0].value = `https://openweathermap.org/img/wn/${icon}.png`;

  }).catch((error) => {
    console.log("error", error);
    cityName.innerHTML = userInput;
    cityName.style.color = "red";
    alert(`city ${userInput} not found pls enter valid city`)
  })
})



