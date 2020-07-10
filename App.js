import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import Add from "./components/Add";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Study Dynamic Programming", key: "1" },
    { text: "Create an app with React Native", key: "2" },
    { text: "Medistate", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitItem = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Add submitItem={submitItem}></Add>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler}
                submitHandler={submitItem}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
