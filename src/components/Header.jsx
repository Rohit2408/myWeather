import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from 'C:/Users/monda/OneDrive/Documents/React/Project/myWeather/src/Header.css';

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">Weather App</Link>
      </div>

      <div className="header__right">
        <Link to="/favorites">Favorites</Link>
        {user ? (
          <span>Hello, {user.email}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
