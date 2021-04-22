import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemleft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  square: {
    height: 25,
    width: 25,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 20,
    maxWidth: "80%",
  },
  circular: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "#55BCF6",
    borderRadius: 50,
  },
});

export default Task;
