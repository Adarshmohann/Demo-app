import React from "react";
import { View,TextInput,TouchableHighlight,Text, Alert } from "react-native";
import { useState } from "react";
import auth from '@react-native-firebase/auth'


export default function Two({navigation}){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState('')
    const handleSignUp = () => {
        if(email !=""&& password!=''){
        auth().createUserWithEmailAndPassword(email,password)
        .then((res)=>{
            console.log("response",res)
            Alert.alert("User created successfully")
            navigation.navigate('Products')
        })
        .catch((error)=>{
            console.log('error',error)
            Alert.alert(error.message)

        })
    }else{
        Alert.alert('Both fields are mandatory')
    }
}


    return(
        <View style={{height:'100%',width:'100%',backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>

            <View style={{height:30,width:'100%',alignItems:'center',justifyContent:'center',marginBottom:30}}>

            <Text style={{color:'white',fontWeight:'bold'}}>ENTER EMAIL AND PASSWORD FOR SIGNUP</Text>

            </View>

        <TextInput style={{
                height:50,
                width:250,
                borderRadius:5,
                borderWidth:2,
                borderColor:'orange',
                marginBottom:10,
                backgroundColor:'gray',

            }}
            placeholder={'Email'}
            placeholderTextColor='black'
            value={email}
           onChangeText={text=> setemail(text)}>

            </TextInput>

            <TextInput style={{
                height:50,
                width:250,
                borderRadius:5,
                borderWidth:2,
                borderColor:'orange',
                marginBottom:10,
                backgroundColor:'gray'
            }}
            placeholder={'Password'}
            placeholderTextColor='black'
            value={password}
           onChangeText={text=> setpassword(text)}>

            </TextInput>

            <TouchableHighlight style={{
                height:40,
                width:150,
                backgroundColor:'green',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:5,
                marginTop:10
            }}
            onPress={handleSignUp}>

                <Text style={{color:'white'}}>DONE</Text>

            </TouchableHighlight>

            


        </View>
    )
}