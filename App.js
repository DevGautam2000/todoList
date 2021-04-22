import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Tasks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskitems] = useState([]);

  const update = () => {
    if (task != null) {
      setTaskitems([task, ...taskItems]);
      setTask(null);
    }
  };

  const deleteTodo = (index) => {
    let tasksCopy = [...taskItems];
    tasksCopy.splice(index, 1);
    setTaskitems(tasksCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* {today's tasks} */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/* {items to be added to list} */}
        <ScrollView style={styles.items}>
          {taskItems.map((items, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteTodo(index)}>
                <Task text={items} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.writeTextWrapper}>
        <TextInput
          style={styles.input}
          placeholder="write task here"
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => update()}>
          <View style={styles.plusWrapper}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
    margin: 0,
  },

  tasksWrapper: {
    paddingTop: 110,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#5E5454",
  },

  items: {
    marginTop: 40,
    height: "65%",
  },

  writeTextWrapper: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    width: "78%",
    maxWidth: "80%",
    fontSize: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 60,
  },

  plusWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    width: 60,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  plusText: {
    fontSize: 30,
    color: "#55BCF6",
  },
});
