import React, { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import List from '../components/mealDetail/List';
import Subtitle from '../components/mealDetail/Subtitle';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  // const favoriteMealCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const {
    imageUrl,
    title,
    affordability,
    complexity,
    duration,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List listData={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List listData={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 22 },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
