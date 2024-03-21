import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const FeedHeader = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'rgba(0, 0, 0, 0.95)'}}>
        <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)']}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            height: 130,
        }}
    >
            <View style={{flexDirection: 'row', justifyContent: 'space-between',  top: 0, height: 130 }}>
                <Ionicons name="search" size={24} color="white" top={80} left={20} />
                <View style={{top: 60}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontFamily: 'pacif-regular', fontSize: 15, color: Colors.primary}}>HYPE</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5}}>
                        <Text style={{ fontWeight: 'bold', color: 'white'}}>Featured</Text>
                        <Text style={{ fontWeight: 'bold', color: 'white', textDecorationLine: 'underline' }}>Subscribed</Text>
                    </View>
                </View>
                <Link href={'/(modals)/notifications'} style={{top: 80, right: 20}}> 
                <Ionicons name="notifications-outline" size={25} color="white" /> 
                </Link>
            </View>
            <StatusBar style="light" />
            </LinearGradient>
        </SafeAreaView> 
    )
    };

export default FeedHeader;