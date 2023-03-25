import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDeails from "../components/MealDeails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealsDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  function headerButtonPressHandler() {
    console.log("Pressed!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
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
