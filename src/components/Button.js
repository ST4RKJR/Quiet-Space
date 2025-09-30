import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 12,
        backgroundColor: "#007AFF",
        borderRadius: 8,
        marginVertical: 5,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
