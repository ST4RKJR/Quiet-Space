import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Screen (Mini games for bonding coming soon)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20 },
});

export default GameScreen;
