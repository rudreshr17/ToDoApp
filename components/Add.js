import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Add({ submitItem }) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.item}
        placeholder="New item"
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <Button
        onPress={() => submitItem(text)}
        title="Add item"
        color="#ff2571"
        value={text}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
});
