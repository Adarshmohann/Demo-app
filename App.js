import React from "react";
import { View } from "react-native";

import One from "./Screens/One";
import Two from "./Screens/Two"
import Three from "./Screens/Three";
import Cart from "./src/Components/cart";
import Products from "./src/Components/product";
import { Provider } from 'react-redux';
import {mystore} from './src/store/store'


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()


function Mystack(){
  return(
    
    <Stack.Navigator>

    <Stack.Screen
      name="One" 
     component={One}
     options={{headerShown:false}}
     /> 

    <Stack.Screen
    name="Two"
    component={Two}
    options={{headerShown:false}}/>

   <Stack.Screen
    name="Products"
    component={Products}
    options={{headerShown:false}}/>

   <Stack.Screen
    name="Cart"
    component={Cart}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="Three"
    component={Three}
    options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}


export default function App(){
  return(
    <Provider store={mystore}>
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
    </Provider>
  
  )
}