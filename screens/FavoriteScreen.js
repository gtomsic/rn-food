import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/mealsList/MealsList";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";

const FavoriteScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => mealIds.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorites yet!</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
