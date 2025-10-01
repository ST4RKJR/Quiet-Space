import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Call Screen (Voice/Video call feature coming soon)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20 },
});

export default CallScreen;
