import {View, Text, Image} from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Feed = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    console.log('🚀 ~ file: [].tsx:7 ~ Page ~ id:', id);

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
            <SafeAreaView style={{ height: 0, backgroundColor: 'black' }}>
            </SafeAreaView>

            <View style={{ flex: 1, backgroundColor: 'black', height: 1000}}>
                <Image source={{ uri: outfitsArr[0].outfitImage }} style={{position: 'absolute', top: 0, height: 650, width: 500}}></Image>
                <View style={{ position: 'absolute', top: 750, backgroundColor: 'white', height: 400, width: 500, zIndex: 100}}>
                </View>
            </View>
        </>
    );
};

export default Feed;