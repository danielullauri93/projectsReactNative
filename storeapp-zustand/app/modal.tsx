import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { storage } from "../store/mmkv";
import { useMMKV, useMMKVString } from "react-native-mmkv";

export default function ModalScreen() {
  const [name, setName] = useMMKVString("user.displayname", storage);

  const updateName = () => {
    storage.set("user.displayname", "Daniel");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App: {name}</Text>
      <Button title="Update" onPress={updateName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
