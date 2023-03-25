import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ meals }) => {
  return (
    <View style={styles.container}>
      {meals.map((steps, index) => (
        <View key={steps} style={styles.textContainer}>
          <Text style={styles.textColor}>{steps}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  textContainer: {
    borderRadius: 5,
  },
  textColor: {
    marginVertical: 5,
    textAlign: "center",
    color: "#ddd",
  },
});
