import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <ScrollView>

          <View style={styles.buttonContainer}>
            <View style={styles.anyContainer}>
            <Text style={styles.title}>Update Funds</Text>
          
          <View style={styles.dataContainer}>
            <TextInput placeholder='Enter value' style={styles.textinput} placeholderTextColor = {COLORFONTS.white} />
          </View>

          </View>

            <TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Play</Text>
              </View>
            </TouchableOpacity>


          </View>
        </ScrollView>
    </View>
  )
}



export default HomeScreen;