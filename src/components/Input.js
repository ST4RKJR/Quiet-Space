import React from "react";
import { TextInput } from "react-native";

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
      }}
    />
  );
}
