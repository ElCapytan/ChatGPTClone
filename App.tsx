import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {

const [inputValue, setInputValue] = useState('')

const handleTextChange = (value: string) => {
  setInputValue(value)
}
const handleSubmit = () => {
  console.log('Submitted', inputValue)
}

  return (
    <View style={styles.container}>
      <LinearGradient
      //Array of colors to create a gradient transition
      colors={['#03045e', '#0000CD', '#00008B']}
      //Start and End point for the transition
      start={{ x: .4, y: .4 }}
        end={{ x: 1, y: .8 }}
        style={styles.gradient}
      >
      <Text style={styles.text}>ChatGPT Clone Inbound</Text>
      <View style={styles.inputContainer}>
      <TextInput placeholder='Enter Text Here' style={styles.inputBox} value={inputValue} onChangeText={handleTextChange} />
      <View style={styles.buttonContainer}>
      <Button title="Submit" onPress={()=>{}} />
      </View>
      </View>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%', // Ensure the container takes full width
    paddingLeft: 20,
    marginBottom: 30,
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 75,
  },
  inputBox: {
    marginTop: 8,
    width: '95%',
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
  },
  buttonContainer: {
    width: '20%',
  }
});
