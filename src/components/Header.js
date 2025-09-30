import React from "react";
import { Text, StyleSheet } from "react-native";
import typography from "../config/typography";

export default function Header({ title }) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    ...typography.heading,
    textAlign: "center",
    marginVertical: 15,
  },
});
