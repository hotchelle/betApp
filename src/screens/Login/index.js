import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'


const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>*My Ace Bet*</Text>
          </View>
          
          <View style={styles.anyContainer}>
            <Text style={styles.title}>Enter Game Pin</Text>
          </View>

          <View style={styles.dataContainer}>
            <TextInput style={styles.textinput} placeholderTextColor={COLORFONTS.white} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('stack')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Ace</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.buttonContainer2}>
            <TouchableOpacity onPress={() => navigation.navigate('admin')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Admin</Text>
              </View>
            </TouchableOpacity>

          </View>
          
        </ScrollView>
    </View>
  )
}



export default LoginPage;