import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleSwipeUp = () => {
    setBackgroundImage('C:/Users/monda/OneDrive/Documents/React/Project/myWeather/palle-knudsen-Bl61MZLv7x0-unsplash.jpg');
  };

  const handleSwipeDown = () => {
    const customWallpaper = 'C:/Users/monda/OneDrive/Documents/React/Project/myWeather/palle-knudsen-Bl61MZLv7x0-unsplash.jpg'; 
    setBackgroundImage(customWallpaper);
  };

  return (
    <div
      className={`landing-page ${backgroundImage ? 'show-background' : ''}`}
      onClick={backgroundImage ? handleSwipeUp : handleSwipeDown}
    >
      {backgroundImage ? (
        <div className="swipe-up">Swipe up to continue</div>
      ) : (
        <h1 className="app-name" style={{fontWeight: 'bold'}}>myWeather</h1>
      )}
    </div>
  );
};

export default LandingPage;
