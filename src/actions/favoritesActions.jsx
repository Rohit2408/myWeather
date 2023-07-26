export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const LOAD_FAVORITES_FROM_LOCAL_STORAGE = 'LOAD_FAVORITES_FROM_LOCAL_STORAGE';

export const addToFavorites = (city) => ({
  type: ADD_TO_FAVORITES,
  payload: city,
});

export const removeFromFavorites = (cityId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: cityId,
});

export const loadFavoritesFromLocalStorage = () => ({
  type: LOAD_FAVORITES_FROM_LOCAL_STORAGE,
});

export const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};