import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen'; 
import SymptomsScreen from './src/screens/SymptomsScreen';
import DoctorsListScreen from './src/screens/DoctorsListScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
        {/* Symptom Screen */}
        <Stack.Screen
          name="Symptom"
          component={SymptomsScreen}
          options={{ title: 'Symptoms' }}
        />
        
        {/* Doctor List Screen */}
        <Stack.Screen
          name="DoctorList"
          component={DoctorsListScreen}
          options={{ title: 'Doctors List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;