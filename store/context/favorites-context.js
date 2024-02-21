import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealId] = useState([]);
  function addFavorites(id) {
    setFavoriteMealId((prevFavIds) => [...prevFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealId((prevFavIds) =>
      prevFavIds.filter((favId) => favId.id !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorites: addFavorites,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
