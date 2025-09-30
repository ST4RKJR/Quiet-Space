import React from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';

export default function HomeScreen({navigation}) {
    const handleFocus = () =>{
        navigation.navigate('Login')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Screen (Placeholder)</Text>
      <Button title='LoginScreen' onPress={handleFocus}/>
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
    fontSize: 20,
  },
});
