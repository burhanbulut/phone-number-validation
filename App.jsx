
import React, { useState } from 'react';
import { View, TextInput,Text, Button, StyleSheet, Alert, Image } from 'react-native';
import validatePhoneNumber from "burhan-validate-phone-number"
import Logo from './assets/logo.jpg';



export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleValidate = () => {
    
      const isValid = validatePhoneNumber(phoneNumber);
      Alert.alert(isValid.message);

  };

  return (
      <View style={styles.container}>
         <Image source={Logo} style={{width: 100, height: 100, marginBottom:20, borderRadius:50}}/>
          <Text style={{fontSize:24, marginBottom:20, color:'black'}}>Telefon Numarası Doğrulama</Text>
          
                  
          <View style={{flexDirection:'row'}}>         
          <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder='Telefon Numarası Giriniz'
          />
          </View>
          <Text style={{ marginBottom: 20 , fontSize:20}}>{phoneNumber}</Text>
          <Button title="Doğrula" onPress={handleValidate} />
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7ccd4',
    color:'#F9F9F9'
  },
  input: {
    height: 60,
    width: '80%',
    borderColor: '#F9F9F9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize:20,
    color:'black',
    backgroundColor:'#f8f8f8'
  }, 
});


