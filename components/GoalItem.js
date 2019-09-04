import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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
    <TouchableOpacity onPress={props.deleteHandler.bind(this, props.id)}>
      <View>
        <Text style={styles.listItem}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
