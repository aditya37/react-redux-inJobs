import React from 'react'
/*
Access the navigation prop from any component
https://reactnavigation.org/docs/connecting-navigation-prop
*/
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

const CustomHeader = (props) => {
    /*
    Access the navigation prop from any component
    https://reactnavigation.org/docs/connecting-navigation-prop
    */
    const navigation = useNavigation();
    return(
        <View>
            <Header 
            placement="left"
            containerStyle={{
                height:75,
                backgroundColor:'#fff'
            }}
            leftComponent={{ 
                icon: 'arrow-back', 
                color: '#000000',
                size:24,
                onPress: () => {
                    navigation.navigate(props.screen)
                }
            }}
            centerComponent={{ 
                text: props.title, 
                style: { 
                    fontSize:18,
                    color: '#000000',
                    fontWeight:'bold',
                } 
            }}/>            
        </View>
    )
}
export default CustomHeader
