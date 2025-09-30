import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;