import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <ScrollView>

          <View style={styles.buttonContainer}>
          
          <TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Update Bids</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.secondButton}>
                <Text style={styles.buttonText2}>A</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.secondButton}>
                <Text style={styles.buttonText2}>B</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.secondButton}>
                <Text style={styles.buttonText2}>C</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Set Timer</Text>
              </View>
            </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  )
}



export default HomeScreen;