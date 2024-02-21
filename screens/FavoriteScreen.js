import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/mealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

const FavoriteScreen = () => {
  // const { ids } = useContext(FavoritesContext);
  const ids = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
