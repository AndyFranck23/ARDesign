import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Achat from './Achat'
import Photo from './Photo'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const TabsLayout = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFB600',
                tabBarInactiveTintColor: '#FFF5BF',
                tabBarStyle: {
                    backgroundColor: '#0B5371',
                    height: 50,
                }
            }}
            initialRouteName='Home'
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ color }) => <FontAwesome size={35} name="home" color={color} />,
                headerShown: false
            }}
            />
            <Tab.Screen name='Achat' component={Achat} options={{
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
                headerShown: false
            }}
            />
            <Tab.Screen name='Photo' component={Photo} options={{
                tabBarIcon: ({ color }) => <FontAwesome size={30} name="camera" color={color} />,
                headerShown: false
            }}
            />
        </Tab.Navigator>
    )
}

export default TabsLayout