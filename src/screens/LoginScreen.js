import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiet Space</Text>
      <Text style={styles.login}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles}>
        <TouchableOpacity>
          <Text style={styles.signup}>Not a Member yet?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}> SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1E2E",
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#EAEAEA",
  },
  login: {
    color: "#EAEAEA",
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 40,
  },
  signup: {
    color: "#EAEAEA",
    textAlign: "center",
    fontSize: 16,
    textAlign: "right",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#ccc",
  },
  button: {
    backgroundColor: "#8AB4F8",
    
    justifyContent:'center',
    alignItems:'center',
    
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  buttonText:{
    color: "#EAEAEA",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding:'auto'
  },
});

export default LoginScreen;
