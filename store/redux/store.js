import { configureStore } from '@reduxjs/toolkit';
import favoriteRuder from './favorites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteRuder,
  },
});
