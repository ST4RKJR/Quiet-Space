import React from "react";
import { View, Text, Button , StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
    const handleHomeScreen =()=>{
        navigation.navigate('Focus')
    }
  return (
    <View style={styles.container}>

      <Button style={styles.text} title="Focus Screen" onPress={handleHomeScreen}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen