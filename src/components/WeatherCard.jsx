import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/favoritesActions';
import { CircularProgress, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const WeatherCard = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const favorites = useSelector((state) => state.favorites);
  const [isCelsius, setIsCelsius] = useState(true);

  const isFavorite = favorites.some((city) => city.id === weatherData.id);

  const dispatch = useDispatch();

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (tempInCelsius) => {
    if (isCelsius) {
      return `${tempInCelsius} °C`;
    } else {
      const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
      return `${tempInFahrenheit.toFixed(2)} °F`;
    }
  };

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      const { id, name, sys } = weatherData;
      dispatch(addToFavorites({ id, name, country: sys.country }));
    } else {
      dispatch(removeFromFavorites(weatherData.id));
    }
  };

  return (
    <div className="weather-card">
      {weatherData ? (
        <>
          <div className="weather-info">
            <h2>{`${weatherData.name}, ${weatherData.sys.country}`}</h2>
            <div className="temperature-switch">
              <span>{convertTemperature(weatherData.main.temp)}</span>
              <button onClick={toggleTemperatureUnit}>
                {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
              </button>
              <IconButton onClick={handleAddToFavorites}>
                {isFavorite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </div>
            <div className="weather-description">{weatherData.weather[0].description}</div>
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default WeatherCard;
