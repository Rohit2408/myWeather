import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions/weatherActions';
import WeatherCard from '../components/WeatherCard';
import Weather from './Weather'; 

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const weatherData = useSelector((state) => state.weather.data);
  const dispatch = useDispatch();

  const handleWeatherSearch = () => {
    dispatch(fetchWeatherData(city, country));
  };

  return (
    <div className="container">
      <div className="weather-page">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button onClick={handleWeatherSearch}>Search</button>
        </div>
        {weatherData && (
          <div className="current-weather">
            <div className="current-weather-info">
              <WeatherCard weatherData={weatherData} />
            </div>
          </div>
        )}
        {weatherData && (
          <div className="weekly-weather">
            <div className="weekly-weather-wrapper">
              <h2>Weekly Weather Forecast</h2>
              <Weather lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
