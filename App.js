import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORFONTS } from './Constants/theme.js';
import { SIZEFONTS } from './Constants/theme.js';
import LoginPage from './src/screens/Login/index.js';
import Router from './src/Router/Router.js';




export default function App () {
  
  return (
    <Router />
  )

  
}
