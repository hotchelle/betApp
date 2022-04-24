import { View, Text } from 'react-native'
import React from 'react'
import Register from '../screens/Register'
import LoginPage from '../screens/Login'
import accountSettings from '../screens/AccountSettings'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import myStorePage from '../screens/MyStorePage'
import HomeScreen from '../screens/Home'
import { COLORFONTS } from '../../Constants/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Admin from '../screens/Admin'

const auth = createStackNavigator(
    {
        Login:
        {
            screen: LoginPage,
            navigationOptions: {
                headerShown: false,
            }
        },
        admin:
        {
            screen: Admin,
            navigationOptions:
            {
                headerShown: false,
            }
        }
    }

);

const homenav = createStackNavigator(
    {
        home:
        {
            screen: HomeScreen,
            navigationOptions:
            {
                headerShown: false,
            }

        },
        Bid:
        {
            screen: accountSettings
        }
    }

)


const stack = createSwitchNavigator(
    {
        authStack:
        {
            screen: auth,
            navigationOptions:
            {
                headerShown: false,
            }
        },
        stack:
        {
            screen: homenav,
            navigationOptions:
            {
                headerShown: false,
            }
        }

    }
);

const Router = createAppContainer(stack);


export default Router