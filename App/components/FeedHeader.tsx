import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const FeedHeader = () => {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent', top: 60, height: 60 }}>
                <Ionicons name="search" size={24} color="black" top={10} left={20} />
                <View style={{}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontFamily: 'pacif-regular', fontSize: 15, color: Colors.primary}}>HYPE</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 5}}>
                        <Text style={{ fontWeight: 'bold' }}>Featured</Text>
                        <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Subscribed</Text>
                    </View>
                </View>
                <Ionicons name="notifications-outline" size={25} color="black" top={10} right={20} />                    
            </View>
        </View>
    )
    };

    const styles = StyleSheet.create({

    });

export default FeedHeader;