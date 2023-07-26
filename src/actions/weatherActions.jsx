import axios from 'axios';

// Action Types
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';


// Action Creators
export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (data) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherFailure = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
};

const API_KEY = '0ccf4d9c7c30b20269a20552ea6f7fb2';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const FETCH_WEATHER_WEEKLY_REQUEST = 'FETCH_WEATHER_WEEKLY_REQUEST';
export const FETCH_WEATHER_WEEKLY_SUCCESS = 'FETCH_WEATHER_WEEKLY_SUCCESS';
export const FETCH_WEATHER_WEEKLY_FAILURE = 'FETCH_WEATHER_WEEKLY_FAILURE';

// Async Action Creator for Fetching Weather Data
export const fetchWeatherData = (city, country) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(`${BASE_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};

export const fetchWeatherWeeklyRequest = () => {
  return {
    type: FETCH_WEATHER_WEEKLY_REQUEST,
  };
};

export const fetchWeatherWeeklySuccess = (data) => {
  return {
    type: FETCH_WEATHER_WEEKLY_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherWeeklyFailure = (error) => {
  return {
    type: FETCH_WEATHER_WEEKLY_FAILURE,
    payload: error,
  };
};

