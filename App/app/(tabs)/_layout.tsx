import {View, Text} from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: { 
                    backgroundColor: 'transparent', 
                    borderTopWidth: 0, 
                    position: 'absolute', 
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: { 
                    display: 'none', 
                },
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />
                }} 
            />

            <Tabs.Screen 
                name="upload" 
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="add-box" color={color} size={size} />
                }} 
            />

            <Tabs.Screen 
                name="profile" 
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />
                }} 
            />
        </Tabs>
    );
};

export default Layout;