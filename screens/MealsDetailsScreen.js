import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealDeails from "../components/MealDeails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealsDetailsScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  function addFavoriteHandler() {
    if (mealsIsFavorite) {
      return favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealsIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={addFavoriteHandler}
          />
        );
      },
    });
  }, [navigation, addFavoriteHandler]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealDeails
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List meals={selectedMeals.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List meals={selectedMeals.steps} />
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
