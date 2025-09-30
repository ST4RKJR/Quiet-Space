import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    color: colors.muted,
    marginBottom: 6,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
});
