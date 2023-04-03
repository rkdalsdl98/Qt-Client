import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Screens from './Screens/Screens';
function App() {
  return (
    <View style={{flex: 1,}}>
      <StatusBar
      animated={true}
      translucent={true}
      barStyle='dark-content'
      backgroundColor='transparent'
      />
      <NavigationContainer>
        <Screens></Screens>
      </NavigationContainer>
    </View>
  );
}

export default App
 