import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={[tw`flex-1 items-center justify-center bg-white`]}>
      <Text style={tw`text-3xl`}>My React Native App!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link>
    </View>
  );
}
