import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>MyTodos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 50,
    backgroundColor: "#fab",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#e66b84",
    fontSize: 23,
  },
});
