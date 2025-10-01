import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Quiet Space!</Text>
      <Button title="Go to Focus Mode" onPress={() => navigation.navigate("Focus")} />
      <Button title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default HomeScreen;
