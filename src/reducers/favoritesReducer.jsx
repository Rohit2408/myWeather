import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, LOAD_FAVORITES_FROM_LOCAL_STORAGE } from '../actions/favoritesActions';

const initialState = [];

export const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const updatedFavoritesAdd = [...state, action.payload];
      saveFavoritesToLocalStorage(updatedFavoritesAdd);
      return updatedFavoritesAdd;

    case REMOVE_FROM_FAVORITES:
      const updatedFavoritesRemove = state.filter((city) => city.id !== action.payload);
      saveFavoritesToLocalStorage(updatedFavoritesRemove);
      return updatedFavoritesRemove;

    case LOAD_FAVORITES_FROM_LOCAL_STORAGE:
      return action.payload;

    default:
      return state;
  }
};

export default favoritesReducer;
