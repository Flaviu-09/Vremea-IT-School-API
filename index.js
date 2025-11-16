const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Brasov.
if (!currentCity) {
  localStorage.setItem("city", "Brasov");
  currentCity = "Brasov";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

const scrollToTopButton = document.getElementById("scrollToTopBtn");

scrollToTopButton.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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