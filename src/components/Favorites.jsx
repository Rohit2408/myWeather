import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { addToFavorites, removeFromFavorites } from '../actions/favoritesActions';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (cityId) => favorites.some((city) => city.id === cityId);

  const handleFavoriteToggle = (city) => {
    if (isFavorite(city.id)) {
      dispatch(removeFromFavorites(city.id));
    } else {
      dispatch(addToFavorites(city));
    }
  };
  
  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((city) => (
            <li key={city.id}>
              <span className="favorite-city">{`${city.name}, ${city.country}`}</span>
              <IconButton onClick={() => handleFavoriteToggle(city)}>
                {isFavorite(city.id) ? <Favorite style={{ color: 'white' }} /> : <FavoriteBorder style={{ color: 'white' }} />}
              </IconButton>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'white' }}>No favorite cities yet.</p>
      )}
    </div>
  );
};

export default Favorites;
