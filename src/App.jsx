// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import SignInPage from './pages/SignInPage';
import './App.css';
import { loadFavoritesFromLocalStorage } from './actions/favoritesActions';
import './LandingPage.css';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [showLandingPage, setShowLandingPage] = useState(true);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.auth.weather);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      dispatch({ type: 'LOAD_FAVORITES_FROM_LOCAL_STORAGE', payload: parsedFavorites });
    }
  }, [dispatch]);

  const handleSwipeUp = () => {
    setShowLandingPage(false);
  };

  return (
    <Router basename="/myWeather">
      <div className={`app ${showLandingPage ? 'landing-page' : ''}`} onClick={handleSwipeUp}>
        {showLandingPage ? (
          <div className="landing-page-content">
            <h1 className="app-name" style={{ fontWeight: 'bold' }}>
              myWeather
            </h1>
            <div className="swipe-up">Swipe up to continue</div>
          </div>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<WeatherPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/login" element={<SignInPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
