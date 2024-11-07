import {View, Text,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import className from 'twrnc';
import { Link } from 'expo-router'

export default function App() {
    return (
        <View style={{backgroundColor: '#002060', flex: 1, justifyContent: 'center', alignItems: 'center', margin: -40}}>
         <Image
                 source={require('../assets/images/banner.png')}
               style={{ width: 200, height: 200, resizeMode: 'cover' }}
        />  

       <TouchableOpacity style={className`bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700`}>
         <Link href="about">
          <Text style={className`text-center text-white text-3xl font-bold`}>Get Started</Text>
          </Link>
       </TouchableOpacity>


        </View>
    )
}