import React from "react";

import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

const GoalItem = props => {
  const { title } = props;
  return (
    <View>
      <Text style={styles.listItem}>{title}</Text>
    </View>
  );
};

export default GoalItem;
