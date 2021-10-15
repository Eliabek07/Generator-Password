import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, CheckBox} from 'react-native';
import Slider from '@react-native-community/slider';
import * as Clipboard from 'expo-clipboard'
import {MaterialCommunityIcons} from '@expo/vector-icons'

let min = 'abcdefghijklmnopqrstuvwxyz';
let mai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let num = '0123456789';
let esp = '!@#$%&*()_+?';

export default function App (){

  const [password,setPassword] = useState('');
  const[size,setSize] = useState(10);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  function generatePass (){
    
    

    let pass = '';
    let newCharSet =''
    if(isSelected1) newCharSet +=min
    if(isSelected2) newCharSet +=mai
    if(isSelected3) newCharSet +=num
    if(isSelected4) newCharSet +=esp
    for (let i = 0, n = newCharSet.length; i< size; i++){
      pass += newCharSet.charAt(Math.floor(Math.random()*n))

    }
    if (!pass){
      ToastAndroid.show("Selecione uma opções", ToastAndroid.SHORT);
    }
    
    setPassword(pass);

  }

    function copyPass(){
      Clipboard.setString(password)
      ToastAndroid.show("Senha copiada com sucesso", ToastAndroid.SHORT);
  
      
    }
  return(





    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      
      />
      
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>

        <Slider
        style={{height: 50}}
        minimumValue={5}
        maximumValue={15}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="blue"
        value={size}
        onValueChange={(valor) => setSize(valor.toFixed(0))}
        
        />

      </View>
      
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text>Letras Minúsculas</Text>
        </>
        <>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text>Letras Maiúsculas</Text>
        </>

       </View>

       <View style={{flexDirection:'row', alignItems: 'center',alignSelf:'flex-start', paddingHorizontal: 21, justifyContent: 'flex-end'}}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text>Números</Text>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
        <Text>Caracteres Especiais</Text>

       </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      

      {password !== '' &&(
        <View style={[styles.area,{justifyContent:'center'}]}>

         <Text style={styles.password} >{password}</Text>  
         <MaterialCommunityIcons name={'content-copy'} onPress={copyPass} size={30} style={{position: 'absolute', right: 5, textAlignVertical: 'center'}}/>   
        </View>

      )}



      


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F3F3FF'
  },

  logo:{
    marginBottom: 10

  },

  title: {
    fontSize:30,
    fontWeight: 'bold',
    color:'#2F4F4F'
  },

  area:{
    marginTop: 25,
    marginBottom: 15,
    backgroundColor:'#FFF',
    width:'90%',
    borderRadius: 10,
  
    

  },

  button: {
    backgroundColor:"#FFA200",
    width:'55%',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15

  },

  buttonText: {
      fontSize: 20,
      color:'#2F4F4F',
      fontWeight: 'bold'


  },

  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',

  },
  checkbox: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
   
  }
  

});