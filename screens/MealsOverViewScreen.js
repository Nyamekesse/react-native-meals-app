import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/mealsList/MealItem';
import MealsList from '../components/mealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayedMeal = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );
  return <MealsList items={displayedMeal} />;
};

export default MealsOverViewScreen;
