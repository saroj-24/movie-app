import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '@/constant/theme';
import Feather from '@expo/vector-icons/Feather';

interface Props{
    placeholder:string;
    onPress?: ()=>void
}
const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View style={styles.container}>
     <View style={styles.searchContainer}>
     <View style={{marginLeft:10}}>
        <Feather name="search" size={20} color="black" />
     </View>
     <TextInput
     onPress={onPress}
     placeholder={placeholder}
     value=''
     onChange={()=>{}}
     />
     </View>
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        
    },
    searchContainer:{
        flexDirection:'row',
        borderWidth:1,
        gap:10,
        alignItems:'center',
        borderColor:theme.colors.primaryBorderColor,
        borderRadius:10,
        backgroundColor:theme.colors.background
    },
    textContainer:{
        textAlign:'left',
        gap:10,
        color:theme.colors.secondaryTextColor,
        fontFamily:theme.fonts.Noto_Regular,
        fontSize:theme.fontSize.header
    }

});