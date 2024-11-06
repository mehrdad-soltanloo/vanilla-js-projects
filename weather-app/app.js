//Function to  fetch weather data
const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
    console.log(data);
  } catch (error) {
    showError(error.message);
  }
};

// Function to display weather info
function displayWeather(data) {
  // Extract necessary data from the API response
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;

  // Update the DOM elements with weather info
  document.getElementById("city-name").textContent = cityName;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${temperature}°C`;

  document.getElementById(
    "weather-description"
  ).textContent = `Weather: ${weatherDescription}`;

  // Add the weather icon by setting the src of the img tag
  document.getElementById(
    "weather-icon"
  ).src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  // Make the weather-info section visible by adding the 'show' class
  const weatherInfo = document.querySelector(".weather-info");
  weatherInfo.classList.add("show");
  // Clear any previous error message
  document.getElementById("error-message").textContent = "";
}
// Function to change background based on weather condition

// Function to handle error
function showError(message) {
  document.getElementById("error-message").textContent = message;
}

// Add event listener to the search button
document.getElementById("search-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city-input").value;

  if (city) {
    getWeather(city);
  }
});
