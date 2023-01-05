import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    ImageBackground,
}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../actions/actions';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper'


const data=[
    {
        pid:100,
        name:'Joy of Small Things',
        price:'$420',
        image:'https://tse1.mm.bing.net/th/id/OIP.kY2s_qIC0YbEKJPokw_-RwHaJ_?w=133&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
        
    },
    {   
        pid:101,
        name:'Wings of Fire',
        price:'$421',
        image:'https://tse2.mm.bing.net/th/id/OIP.L5b-qwwkhohsPHkGbDXX4AHaFu?w=235&h=181&c=7&r=0&o=5&dpr=2&pid=1.7'
    },
    {   
        pid:102,
        name:'Tom and Jerry',
        price:'$423',
        image:'https://tse3.mm.bing.net/th/id/OIP.6Wk2e9BkcQ9GAZpwSjkBsAHaFj?w=249&h=186&c=7&r=0&o=5&dpr=2&pid=1.7'
    },
    {   
        pid:103,
        name:'End Game',
        price:'$423',
        image:'https://tse1.mm.bing.net/th/id/OIP.xIhrUlDIH1tBXmIMuWbXiQHaKe?w=122&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
    },
    {   
        pid:104,
        name:'Harry Potter',
        price:'$423',
        image:'https://tse1.mm.bing.net/th/id/OIP.IDoT-bB_r6_wMt7dGkJmsAHaJ4?w=127&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
    },
    {   
        pid:105,
        name:'Jurassic Park',
        price:'$423',
        image:'https://tse1.mm.bing.net/th/id/OIP.VTAhQTSVT9h_fFsiGkA-NwHaI0?w=142&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
    },

    
]
   
const Products = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state);
    const addItem=item =>{
        dispatch(addProducts(item))
        };

        
    const navigation = useNavigation();
    const [searchquery,setsearchquery]=React.useState('')
    const onChangeSearch=query=>setsearchquery(query)
    return (
            <View style={{flex:1,backgroundColor:'gray'}}>
                
                <View style={{height:'20%',width:'100%',backgroundColor:'black'}}>

                    <View style={{flexDirection:'row'}}>
                    <Text style={{
                        fontSize:26,
                        fontWeight:'bold',
                        color:'white',
                        marginTop:12,
                        marginLeft:15}}>Products</Text>

                    <TouchableHighlight style={{
                        height:50,
                        width:70,
                        backgroundColor:'black',
                        marginLeft:170,
                        marginTop:15}}

                    underlayColor={'transparent'}
                    onPress={()=>{navigation.navigate('Cart')}}>
                        <View style={{flexDirection:'row'}}>
                    <Icon name='shopping-cart' size={26} color='white'/>
                    <Text style={{fontSize:17,marginLeft:10,color:'white',fontWeight:'bold'}}>
                        {items.length}</Text>
                    </View>


                    </TouchableHighlight>
                    </View>

                    
                <Searchbar style={{backgroundColor:'white',borderRadius:20,height:'30%',width:'80%',marginLeft:35,marginBottom:20,marginTop:20,borderWidth:2,borderColor:'gray'}}
                 placeholder="Search"
                 onChangeText={onChangeSearch}
                 // value={searchQuery}
                />
                

                   

                </View>
                
                
                <FlatList 
                data={data}
                renderItem={({item})=>{
                    return(
                        <View style={{
                            width:'95%',
                            height:150,
                            borderRadius:15,
                            alignItems:'center',
                            justifyContent:'space-between',
                            alignSelf:'center',
                            marginTop:10,
                            borderWidth:3,
                            borderColor:'black',
                            flexDirection:'row',
                            backgroundColor:'white'
                        }}>
                            <View style={{width:'60%',padding:20}}>
                                <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>{item.name}</Text>
                                <Text style={{fontSize:18,fontWeight:'700',color:'red'}}>
                                    {item.price}
                                </Text>
                            <TouchableOpacity
                            style={{
                                height:30,
                                borderRadius:5,
                                width:120,
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:'green',
                                marginTop:5
                            }}
                            onPress={()=>{
                                addItem(item);
                            }}>
                                <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Add To Cart</Text>
                            </TouchableOpacity>
                            
                            </View>
                            <View style={{flexDirection:'row',position:'absolute',right:30,borderRadius:5,borderWidth:2}}>
                                <ImageBackground
                                source={{uri:item.image}}
                                style={{height:100,width:100}}>

                                </ImageBackground>

                                
                                
                            </View>
                            
                        </View>
                    )
                }}/>
            
                
            </View>
    )
};
export default Products;