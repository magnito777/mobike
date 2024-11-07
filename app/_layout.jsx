import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import the icon from a library
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const _layout = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'back',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // Customize headerLeft to make the back button clickable
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={40} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      {/* Add more Stack.Screen components as needed */}
    </Stack>
  );
}

export default _layout;
