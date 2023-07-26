import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import weatherReducer from './reducers/weatherReducer';
import authReducer from './reducers/authReducer';
import favoritesReducer from './reducers/favoritesReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
