import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen';

const RootLayout = () => {
  return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}

export default RootLayout
