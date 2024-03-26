import {View, Text, Image, ScrollView, Platform, TextInput} from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Feed = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    console.log('🚀 ~ file: [].tsx:7 ~ Page ~ id:', id);

    const outiftId = id;

    const outfitsArr = [
        {
            id: 1,
            userName: 'Champagnepapi',
            outfitImage: 'https://shorturl.at/vyCFW',
            userImage: 'https://shorturl.at/doqGP',
            datePosted: 'Feburary 29, 2024',
            rating: 4.8,
        },
        {
            id: 2,
            userName: 'Kayne West',
            outfitImage: 'https://shorturl.at/cqyDY',
            userImage: 'https://shorturl.at/xJOP9',
            datePosted: 'August 11, 2023',
            rating: 4.5,
        },
        {
            id: 3,
            userName: 'Kai Cenat',
            outfitImage: 'https://shorturl.at/irsP8',
            userImage: 'https://shorturl.at/jIKO2',
            datePosted: 'October 18, 2023',
            rating: 3.2,
        },
        {
            id: 4,
            userName: 'SZA',
            outfitImage: 'https://shorturl.at/bhmx3',
            userImage: 'https://shorturl.at/jsAMR',
            datePosted: 'September 09, 2022',
            rating: 4.8,
        },
        {
            id: 5,
            userName: 'SZA',
            outfitImage: 'https://shorturl.at/bhmx3',
            userImage: 'https://shorturl.at/jsAMR',
            datePosted: 'September 09, 2022',
            rating: 4.8,
        },
        {
            id: 6,
            userName: 'SZA',
            outfitImage: 'https://shorturl.at/bhmx3',
            userImage: 'https://shorturl.at/jsAMR',
            datePosted: 'September 09, 2022',
            rating: 4.8,
        },
    ];

    return (
        <>
            <SafeAreaView style={{ backgroundColor: 'black', paddingTop: Platform.OS === 'android' ? 25 : -35  }}>
            </SafeAreaView>
            <ScrollView style={{backgroundColor: 'black'}}>
            <View style={{ flex: 1,  height: 950}}>
                <Image source={{ uri: outfitsArr[0].outfitImage }} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', top: 0, height: 650, width: 430 }}></Image>
                <Text style={{fontSize: 30, fontWeight: '900', color: "rgba(255, 255, 255, 0.8)", position: 'absolute', top: 10, right: 60}}>4.8</Text>
                <Ionicons name="star" size={30} color="rgba(255, 255, 255, 0.8)"  style={{position: 'absolute', top: 10, right: 20}} />

                <View style={{ position: 'absolute', borderRadius: 15, top: 610, backgroundColor: '#1E1E1E', height: 350, width: 430, zIndex: 1}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: outfitsArr[0].userImage }} style={{ height: 55, width: 55, borderRadius: 25, top: 18, left: 10 }}></Image>
                            <MaterialCommunityIcons name="dots-horizontal" size={50} color="rgba(255, 255, 255, 0.8)" style={{position: 'absolute', top: 10, left: 355}} />
                            <Text style={{ color: 'white', top: 5, left: 30, fontWeight: 'bold', fontSize: 30 }}>{outfitsArr[0].userName}</Text>
                            <Text style={{ color: '#A8A4A4', fontSize: 18, fontWeight: '400', top: 40, left: -200}}>{outfitsArr[0].datePosted}</Text>
                        </View>
                    </View>

                    <View style={{ margin: 10, top: 10 }}>
                        <Text style={{ color: '#A8A4A4', fontSize: 18, fontWeight: '400', top: 10, left: 10, width: 390 }}>This outfit is a lightone you heard! it's one of them ones you throw on casually running through the 6. 🦉 </Text>
                    </View>

                    <View style={{ margin: 10, top: 10 }}>
                        <FontAwesome5 name="comment" size={25} color='#505050' style={{ top: 35, left: 10, }}/>
                        <Ionicons name="share-outline" size={26} color='#505050' style={{ top: 10, left: 50, }} />
                        <TextInput placeholder='Leave a comment...' placeholderTextColor='#505050' style={{backgroundColor: '#1E1E1E', width: 360, height: 50, borderRadius: 50, borderColor: '#505050', borderWidth: 2.5, color: '#A8A4A4', position: 'absolute', top: 80, left: 0, paddingLeft: 20}}></TextInput>
                        <Ionicons name="star-outline" size={35} color='#505050' style={{ top: 35, right: -373}} />
                    </View>

                    <View style={{top: -70, left: 290, height: 40, width: 120, borderRadius: 25, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Subscribe</Text>
                    </View>
                </View>
            </View>
            </ScrollView>

        </>
    );
};

export default Feed;