import {View, TouchableOpacity ,SafeAreaView, Text, Image, ListRenderItem, StyleSheet, FlatList, } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Page = () => {

    const messagesArr = [
        {
            id: 1,
            userName: 'Champagnepapi',
            userImage: 'https://shorturl.at/doqGP',
            message: 'Hey, I love your style!',
        },
        {
            id: 2,
            userName: 'Kayne West',
            outfitImage: 'https://shorturl.at/cqyDY',
            userImage: 'https://shorturl.at/xJOP9',
            message: 'What brought you to the fashion industry?',
        },
        {
            id: 3,
            userName: 'Kai Cenat',
            outfitImage: 'https://shorturl.at/irsP8',
            userImage: 'https://shorturl.at/jIKO2',
            message: 'I love your style, we should collaborate!',
        },
        {
            id: 4,
            userName: 'SZA',
            outfitImage: 'https://shorturl.at/bhmx3',
            userImage: 'https://shorturl.at/jsAMR',
            message: 'You have a great sense of style!',
        },
    ];

    return (

        <View style={{ flex: 1, backgroundColor: '#1E1E1E' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#1E1E1E', height: 150}}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <SimpleLineIcons name="heart" size={40} color="#A8A4A4" left={25} top={50} />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 10, }}>
                        <Text style={{ color: '#A8A4A4', fontSize: 24, fontWeight: '700', top: 0, left: 35}}>Activity</Text>
                        <Text style={{ color: '#A8A4A4', fontSize: 14, top: 10, left: 35 }}>Kai Cenat rated your outfit! ⭐️</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', }}>
                        <Ionicons name="chevron-forward" size={24} color="#A8A4A4" top={-5} right={5} />
                    </View>
            </View>
        <FlatList
        data={messagesArr}
        renderItem={({ item }) =>  
            <View style={{ top: 0, display: 'flex',}}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#1E1E1E', height: 150}}>
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <Image source={{ uri: item.userImage }} style={{ width: 80, height: 80, borderRadius: 50, top: 25, left: 10 }} />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 10, }}>
                            <Text style={{ color: '#A8A4A4', fontSize: 24, fontWeight: '700', top: -15, left: 15}}>{item.userName}</Text>
                            <Text style={{ color: '#A8A4A4', fontSize: 14, top: -10, left: 15 }}>{item.message}</Text>
                        </View>
                    </View>
                </View>

            </View>
        }
        keyExtractor={(item) => item.id.toString()}
        />
        </View>

    );
};


export default Page;