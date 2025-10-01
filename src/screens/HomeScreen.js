import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Chat with a Buddy" onPress={() => navigation.navigate("Chat")} />
      <Button title="Call a Buddy" onPress={() => navigation.navigate("Call")} />
      <Button title="Play a Game" onPress={() => navigation.navigate("Game")} />
      <Button title="Study Focus Mode" onPress={() => navigation.navigate("Focus")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});

export default HomeScreen;
