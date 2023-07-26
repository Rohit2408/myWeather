import React from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../components/Favorites';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-page">
      <h2 style={{ color: 'white' }}>Favorites</h2>
      {favorites.length > 0 ? (
        <Favorites />
      ) : (
        <p style={{ color: 'white' }}>No favorite cities added yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
