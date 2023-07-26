import React, { useEffect, useState } from 'react';
import css from './Weather.css';

const API_KEY = '0ccf4d9c7c30b20269a20552ea6f7fb2'; 

function useOpenWeather({ apiKey, lat, lon, units = 'metric' }) {
  const [apiData, setApiData] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      });
  }, [apiUrl]);

  return apiData;
}

function Weather({ lat, lon }) {
  const weather = useOpenWeather({
    apiKey: API_KEY,
    lat,
    lon,
    units: 'metric',
  });

  return (
    <div className={css.weather}>
      {weather && weather.daily.slice(0, 7).map((d, index) => (
        <div key={index} className={`weather-day-${index + 1}`}>
          <img
            src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
            alt={d.weather[0].main}
          />
          <div>{index === 0 ? 'Today' : `Day ${index + 1}`}</div>
          <div>{d.weather[0].description}</div>
          <div>{`Max: ${d.temp.max}°C`}</div>
          <div>{`Min: ${d.temp.min}°C`}</div>
        </div>
      ))}
    </div>
  );
}

export default Weather;
