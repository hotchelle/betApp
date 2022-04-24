import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'


const Admin = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <ScrollView>

          <View style={styles.buttonContainer}>
          
          <TouchableOpacity>
              <View style={styles.firstButton}>
               <TextInput style={styles.buttonText}>Update Bids</TextInput>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <View style={styles.secondButton}>
                <TextInput style={styles.buttonText2}>A</TextInput>
              </View>

              <TouchableOpacity>
              <View style={styles.secondButton}>
               <TextInput style={styles.buttonText2}>B</TextInput>
              </View>
            </TouchableOpacity>

            <TouchableOpacity >
              <View style={styles.secondButton}>
                <TextInput style={styles.buttonText2}>C</TextInput>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.firstButton}>
                <TextInput style={styles.buttonText}>Update Bids</TextInput>
              </View>
            </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  )
}



export default Admin;