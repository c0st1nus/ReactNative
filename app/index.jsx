import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    
    const calculateSum = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        alert(`The sum is ${sum}`);
      };

  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput 
          placeholder="Enter first number" 
          style={styles.input} 
          onChangeText={setNum1} 
          value={num1} 
          keyboardType="numeric"
        />
        <TextInput 
          placeholder="Enter second number" 
          style={styles.input} 
          onChangeText={setNum2} 
          value={num2} 
          keyboardType="phone-pad"
        />
        <Button title="Calculate Sum" onPress={calculateSum} />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});