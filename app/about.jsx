import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';


const About = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://magnito777.github.io/google-form-mobike/form' }} // Replace with the desired URL
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default About;
