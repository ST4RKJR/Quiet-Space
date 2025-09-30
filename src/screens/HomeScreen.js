import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({navigation}) => {
    const handleHomeScreen =()=>{
        navigation.navigate('Focus')
    }
  return (
    <View>
        
      <Button title="Focus Screen" onPress={handleHomeScreen}/>

    </View>
  );
}

export default HomeScreen