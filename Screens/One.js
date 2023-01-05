import React from "react";
import { View,Text,TouchableHighlight, Alert } from "react-native";
import { useState } from "react";


import { TextInput } from "react-native-gesture-handler";
import RazorpayCheckout from 'react-native-razorpay'
import auth from '@react-native-firebase/auth'




export default function One({navigation}){

    

    const [email,setemail]=useState("")
    const [password,setpassword]=useState('')

    

const login=()=>{
    auth().signInWithEmailAndPassword(email,password).then((res)=>{
        console.log('response',res)
        navigation.navigate('Products')
    })
    .catch((error)=>{
        console.log('error',error)
        Alert.alert(error.message)

    })
    
}


    const handlePayment=()=>{
        var options={
            name:'adarsh',
            description:'test pay',
            currency:'INR',
            amount:50000,
            key:'rzp_test_i09Ej7wclGamEA',
            prefill:{
                email:'adarsh@gmail.com',
                contact:'75764465',
                name:'adarsh'
            },
            theme:{color:'red'}
        }
        RazorpayCheckout.open(options).then((data)=>{
            console.log("data",data)
         Alert.alert('sucess')
        })
        .catch((error)=>{
          Alert.alert('Error: $ {error.code} | ${error.description}')
        })
    }
    return(
        
        <View style={{backgroundColor:'black',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>


            <TextInput style={{
                height:50,
                width:250,
                borderRadius:5,
                borderWidth:2,
                borderColor:'orange',
                marginBottom:10,
                backgroundColor:'gray'
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
                marginBottom:30
            }}
            onPress={login}>

                <Text style={{color:'white'}}>LOGIN</Text>

            </TouchableHighlight>

            <Text style={{color:'white'}}> IF YOU DON'T HAVE AN ACCOUNT SIGNUP FIRST</Text>

            <TouchableHighlight style={{
                height:30,
                width:110,
                backgroundColor:'red',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:5,
                marginTop:50
            }}
            onPress={()=>navigation.navigate('Two')}>

                <Text style={{color:'white'}}>SIGNUP</Text>

            </TouchableHighlight>


            
        </View>
    )
}