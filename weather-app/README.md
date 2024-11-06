# Weather App

A simple weather app built using Vanilla JavaScript, the OpenWeather API, and Flexbox for layout. The app allows users to enter a city name and get the current weather, including temperature, weather description, and an icon representing the weather condition.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Styling](#styling)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- Fetches real-time weather data using the OpenWeather API.
- Displays city name, current temperature, and weather description.
- Shows a weather icon corresponding to the weather condition.
- Implements a clean and responsive UI using Flexbox.
- Includes basic error handling for invalid city names.

---

## Live Demo

Check out the live version of the app: [Weather App Demo](#)

---

## Technologies Used

- **HTML5**: Markup for structuring the app.
- **CSS3**: Styling with Flexbox for layout and responsiveness.
- **JavaScript (Vanilla JS)**: Core functionality for fetching weather data.
- **OpenWeather API**: Provides weather data.

---

## Installation

To run the app locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

## Usage

- Enter the name of a city in the input field.
- Click the Search button.
- The app will display the current temperature, weather description, and an icon representing the weather condition.

## Example:

- Input: "London"
- Output: Displays "Temperature: 18°C", "Weather: clear sky", and a sunny weather icon.

## API Reference

This app uses the OpenWeather API to fetch real-time weather data. You need an API key to access the data.

## OpenWeather API:

- Base URL: https://api.openweathermap.org/data/2.5/weather
- Parameters:
  - q: The city name (e.g., q=London).
  - appid: Your API key.
  - units: Set to metric for Celsius.

## Example API Request:

```bash
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

- Response: JSON object containing weather information like city name, temperature, and weather conditions.

## Key CSS Features:

- Flexbox Layout: Used to align the weather information (text on the left, icon on the right).
- Animations: A fade-in effect is applied to the weather information when it is displayed.
- Responsive Design: The app layout adjusts for different screen sizes.

## Future Improvements

Some potential enhancements for the app include:

- Auto-Detect User Location: Use the browser’s geolocation API to fetch weather data based on the user's location.
- Add Hourly and Weekly Forecasts: Fetch more detailed weather information, such as hourly or weekly forecasts.
- Error Handling Improvements: Add better error messages and user-friendly notifications for API failures.
- Dark Mode: Implement a dark mode toggle to improve the user experience.

> Feel free to fork and contribute to the project! Thank you! 🙂
