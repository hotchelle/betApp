import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'


const accountSettings = ({ navigation }) => {
  return (

    <View style = {{
      flexDirection: 'row',
      flexWrap: 'wrap'
      
    }}>
      
    <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#00B9D2',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> A </Text>
  </TouchableHighlight>

  <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#00B9D2',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> A </Text>
  </TouchableHighlight>


  <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#00B9D2',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> A </Text>
  </TouchableHighlight>


  <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#00B9D2',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> A </Text>
  </TouchableHighlight>

    </View>

  )
}



export default accountSettings;