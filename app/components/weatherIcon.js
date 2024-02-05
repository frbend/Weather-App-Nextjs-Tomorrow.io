import React from 'react';

const WeatherIcon = ({ weatherCode }) => {
    const mapCodeToIcon = (code) => {
      // Mapping of weather codes to OpenWeatherMap icon codes
      const iconMapping = {
        "1000": "01d", // Clear, Sunny (day)
        "1100": "02d", // Mostly Clear (day)
        "1101": "02d", // Partly Cloudy (day)
        "1102": "04d", // Mostly Cloudy (day)
        "1001": "04d", // Cloudy (day)
        "2000": "50d", // Fog (day)
        "2100": "50d", // Light Fog (day)
        "4000": "09d", // Drizzle (day)
        "4001": "10d", // Rain (day)
        "4200": "09d", // Light Rain (day)
        "4201": "10d", // Heavy Rain (day)
        "5000": "13d", // Snow (day)
        "5001": "13d", // Flurries (day)
        "5100": "13d", // Light Snow (day)
        "5101": "13d", // Heavy Snow (day)
        "6000": "13d", // Freezing Drizzle (day)
        "6001": "13d", // Freezing Rain (day)
        "6200": "13d", // Light Freezing Rain (day)
        "6201": "13d", // Heavy Freezing Rain (day)
        "7000": "11d", // Ice Pellets (day)
        "7101": "11d", // Heavy Ice Pellets (day)
        "7102": "11d", // Light Ice Pellets (day)
        "8000": "50d", // Thunderstorm (day)
      };
  
      // Use the mapped icon code or default to sunny (day)
      return iconMapping[code] || "01d";
    };
  
    const weatherIconCode = mapCodeToIcon(weatherCode);
  
    return <img src={`https://openweathermap.org/img/w/${weatherIconCode}.png`} alt="Weather Icon" />;
  };
  
export default WeatherIcon;
