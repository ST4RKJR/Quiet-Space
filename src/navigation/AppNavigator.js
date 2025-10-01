import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import FocusScreen from "../screens/FocusScreen";
import ChatScreen from "../screens/ChatScreen";
import CallScreen from "../screens/CallScreen";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Welcome to Quiet Space" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Focus"
          component={FocusScreen}
          options={{ title: "Focus Mode" }}
        />
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} />
        <Stack.Screen 
          name="Call" 
          component={CallScreen} />
        <Stack.Screen 
          name="Game" 
            component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
