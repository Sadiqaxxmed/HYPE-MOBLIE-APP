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
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            tabBarLabelStyle: { 
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'merriweather-regular',
            },
        }}>
            <Tabs.Screen 
            name="index" 
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />
            }} 
            />

            <Tabs.Screen 
            name="explore" 
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color, size }) => <MaterialIcons name="travel-explore" color={color} size={size} />
            }} 
            />

            <Tabs.Screen 
            name="upload" 
            options={{
                tabBarLabel: 'Upload',
                tabBarIcon: ({ color, size }) => <MaterialIcons name="add-box" color={color} size={size} />
            }} 
            />

            <Tabs.Screen 
            name="profile" 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />
            }} 
            />

        </Tabs>
    );
    };

export default Layout;