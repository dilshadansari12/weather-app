console.log("happy weather");

let sdata = document.getElementById("btn");
sdata.addEventListener("click" , ()=>{
    event.preventDefault()
    let sbox= document.getElementById("bar").value;
    
    // change text first
    let orgs= document.getElementById("org");
   let city = orgs.innerHTML=sbox;

// acces  id for data change
  let temps = document.getElementById("temp");
  let cloudy = document.getElementById("cloudy");
  let humiditys = document.getElementById("humidity");
  let winds = document.getElementById("wind");







    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c31b0ba68588c7a180bdd13d812c2d3c`).then((resolve)=>{
       return resolve.json();
 }).then((data)=>{
    
     let {description , icon } = data.weather[0];
    let {temp  , humidity } = data.main;
    let {speed } = data.wind;
    cloudy.innerHTML=description;
    temps.innerHTML=temp+"°C";
    humiditys.innerHTML=" "+humidity;
    winds.innerHTML=" " +speed + " km/h";
   document.getElementById("srci").attributes[0].value=`https://openweathermap.org/img/wn/${icon}.png`;

     


    // console.log(description , icon , temp , humidity , speed , data)
 }).catch((error)=>{
     console.log("error");
     orgs.style.color="red";
 })
})





// https://openweathermap.org/img/wn/04n/






// city="london"

 
