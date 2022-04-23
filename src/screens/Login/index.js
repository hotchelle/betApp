import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'
import Register from '../Register'

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/pancake.jpg')}
        style={{
          flex: 1,
          alignContent: 'center'

        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Welcome Back</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput placeholder='Username' style={styles.textinput} placeholderTextColor={COLORFONTS.white} />
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.textinput} placeholderTextColor={COLORFONTS.white} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('stack')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Log in</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText}>Don't have an account? SignUp</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}



export default LoginPage;