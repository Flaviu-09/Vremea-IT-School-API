const currentCityTag=document.querySelector('.current-city');
let currentCityFromLocatStorage=localStorage.getItem('city');

if(!currentCityFromLocatStorage){
    localStorage.setItem('city','București');
    currentCityFromLocatStorage='București';
}

//actualizam pe ecran numele orasului
currentCityTag.innerHTML=currentCityFromLocatStorage;


displayCurrentWeather(currentCityFromLocatStorage);
displayWeatherForecast(currentCityFromLocatStorage);
});

const scrollThreshold = window.innerHeight / 0.6; 

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition > scrollThreshold) {
    scrollToTopButton.style.display = "flex"; 
  } else {
    scrollToTopButton.style.display = "none";
  }

});

