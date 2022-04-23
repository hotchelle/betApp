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

const auth = createStackNavigator(
    {
        Login:
        {
            screen: LoginPage,
            navigationOptions: {
                headerShown: false,
            }
        },
        SignUp:
        {
            screen: Register,
            navigationOptions: {
                headerShown: false,
            }
        }
    }

);

const homenav = createStackNavigator(
    {
        home:
        {
            screen: HomeScreen

        },   
    },

    {
        defaultNavigationOptions:
        {
            headerTitle: 'Sweet',
            headerStyle:
            {
                backgroundColor: COLORFONTS.primary
            },
            headerTitleStyle:
            {
                color: COLORFONTS.white,
                fontWeight: '800',
            }
        }
    }
)

const tabNavigator = createBottomTabNavigator({


    store:
    {
        screen: myStorePage,
        navigationOptions:
        {
            tabBarLabel: 'MyStore',
            tabBarIcon:({tintColor,focused}) => <Icon name='view-dashboard-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }
    },
    home:
    {
        screen: homenav,
        navigationOptions:
        {
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor,focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        }

    },
    account:
    {
        screen: accountSettings,
        navigationOptions:
        {
            tabBarLabel: 'Account',
            tabBarIcon:({tintColor,focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={COLORFONTS.primary}/>
        },
       
    },

    

},{
    initialRouteName: 'home',
    
    tabBarOptions: 
    {
        activeTintColor: COLORFONTS.primary,
        inactiveTintColor: COLORFONTS.grey,

        labelStyle:
        {
            fontWeight: 'bold',

        },
        tabStyle:
        {
            paddingTop: 5,
            height: 60
        }
    }

}) 

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
            screen: tabNavigator,
        }

    }
);

const Router = createAppContainer(stack);


export default Router