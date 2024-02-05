'use client'
import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import WeatherIcon from './WeatherIcon';



const apiSearch = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [apiEndpoint, setApiEndpoint] = useState(''); // Initial empty endpoint
    const [error, setError] = useState(null); // Declare error state here
    const [loading, setLoading] = useState(false); // Add loading state




    
    const fetchData = async () => {
        try {
          setLoading(true); // Set loading to true when fetching starts
          const res = await fetch(apiEndpoint)
    
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
    
          const data = await res.json();
          setWeatherData(data);
          console.log(data);
          // Clear any previous errors if fetching is successful
          setError(null);
        } catch (error) {
            console.error(error.message);
            // Set the error state with the error message
            setError("Incorrect search, try again");
            // Log the response if available
            if (error.response) {
              console.error('Response:', await error.response.text());
            }
        } finally {
            setLoading(false); // Set loading to false when fetching is complete (success or error)
          }
      };


      useEffect(() => {
        // Fetch data only when apiEndpoint has a value
        if (apiEndpoint) {
          fetchData();
        }
      }, [apiEndpoint]);

      
      const handleSearch = (city) => {
        // Update the API endpoint based on the location
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
        const newApiEndpoint = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`;
        setApiEndpoint(newApiEndpoint);
        // Clear any previous errors when initiating a new search
        setError(null);
        //console.log(newApiEndpoint)
      };

      
      return (
        <div>
            {loading && (
                <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
                </div>
            )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <SearchBar onSearch={handleSearch} />
            <ul>
                  {weatherData ? (
                    <div className="container">
                      {/* Render your weather data here */}
                      <p id="location"> {weatherData.location.name}</p>
                      <br />
                      <p id="temperature"> {weatherData.data.values.temperature} °C</p>
                      <div id="weather-icon">
                        <WeatherIcon weatherCode={weatherData.data.values.weatherCode}/>
                      </div>
                      <br />
    
                      <p>Humidity: {weatherData.data.values.humidity} %</p>
                      <br />
                      <p>Visibility: {weatherData.data.values.visibility} %</p>
                    </div>
                  ) : (
                    <p>Nothing yet</p>
                  )}
            </ul>
        </div>
      );
    };

export default apiSearch;