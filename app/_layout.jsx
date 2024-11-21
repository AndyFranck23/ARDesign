import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const RoutLayout = () => {
  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}


export default RoutLayout;