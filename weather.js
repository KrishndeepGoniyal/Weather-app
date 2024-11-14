const weathercondition = document.querySelector("#weathercondition")
const cityname = document.querySelector("#cityname")
const description = document.querySelector("#description")
const icon = document.querySelector("#icon")
const countrycode = document.querySelector("#countrycode")
const windspeed = document.querySelector("#windspeed")
const humidity = document.querySelector("#humidity")
const tempbox = document.querySelector("#tempbox")
const feellike = document.querySelector("#feellike")
const weatherimg = document.querySelector("main")
const nav = document.querySelector("nav")

const api_key = "1757d074de3597ce35d2192a7e4a2eaf"


const cityinput = document.querySelector("#cityinput");


const searchbtn = document.querySelector(".searchbtn")
searchbtn.addEventListener("click",()=>{
    
    city = cityinput.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    getweather();
    if(city===""){
    }
    else{
    
    cityinput.value = ""}
    
})



function getweather(){
fetch(url)
.then((response) => {
   // Log the response status
  //console.log("Response status:", response.status);
  // console.log("Is response OK?:", response.ok);
        
   // Check if response is successful
  if (!response.ok) { throw new Error("Network response was not ok");
 }
        // Log headers
     //   console.log("Response headers:", response.headers);
         
     
        
        // Parse JSON data
        return response.json();

    })
    .then((data) => {
      //  console.log("Parsed JSON data:", data);
      
appeardetails();
nav.classList.add("searched")
document.body.classList.remove("bodystyle")
cityname.innerText =`${(data.name).toUpperCase()}`

weathercondition.innerText = `weather condition : ${data.weather[0].main} `

let image = (data.weather[0].main).toLowerCase()
//console.log(image)

weatherimg.style.backgroundImage = `url("images/${image}.jpg")`
document.body.style.backgroundImage = `url("images/${image}.jpg")`

description.innerText = `weather description : ${data.weather[0].description}`

icon.style.backgroundImage = `url(images/${data.weather[0].icon}.png)`


countrycode.innerText = `(${data.sys.country})` 

windspeed.innerText = `wind Speed  :  ${data.wind.speed}m/s` 

humidity.innerText = `humidity :  ${data.main.humidity}%` 

tempbox.innerText = `${data.main.temp}°C`

feellike.innerText = `Feels like ${data.main.feels_like}°C`
        
     
 
     
    })
    .catch((error) => {
      //  console.error("Fetch error:", error);
   
    });
    
 }



function appeardetails(){
   
    const elems = document.querySelectorAll("div")
    elems.forEach((ele)=>{
        ele.classList.remove("hid")
    })
  }
