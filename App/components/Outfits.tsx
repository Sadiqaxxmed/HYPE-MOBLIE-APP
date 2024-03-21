import {View, SafeAreaView, Text, Image, ListRenderItem, StyleSheet, FlatList, } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedHeader from './FeedHeader';

const Outfits = () => {

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
        //<SafeAreaView style={{ flex: 1 }}>
        <FlatList
        data={outfitsArr}
        renderItem={({ item }) =>  
            <View style={{ top: 80, display: 'flex'}}>
                <View key={item.id} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 80}}>

                    <Link href={'/listing/1'}>
                    <Image src={item.outfitImage} style={{height: 600, width: 420, borderRadius: 25, marginLeft: 5, justifyContent: 'center', alignItems: 'center', objectFit: 'cover'}}></Image>
                    </Link>

                    <Text style={{fontSize: 30, fontWeight: '900', color: "rgba(255, 255, 255, 0.8)", position: 'absolute', top: 15, right: 60}}>{item.rating}</Text>
                    <Ionicons name="star" size={30} color="rgba(255, 255, 255, 0.8)"  style={{position: 'absolute', top: 17, right: 20}} />
                    <MaterialCommunityIcons name="dots-horizontal" size={50} color="rgba(255, 255, 255, 0.8)" style={{position: 'absolute', top: 10, left: 20}} />

                    <View style={{height: 80, width: 395, borderRadius: 15, backgroundColor: '#1E1E1E', position: 'absolute', bottom: -48, left: 20,  }}>
                    <Image src={item.userImage} style={{ top: 15, left: 15, height: 50, width: 50, borderRadius: 100}}></Image>
                    <Text style={{left: 80, top: -40, fontSize: 25, fontWeight: '700', color:'white'}}>{item.userName}</Text>
                    <Text style={{left: 80, top: -32, fontSize: 18, fontWeight: '500', color: '#A8A4A4'}}>{item.datePosted}</Text> 
                    <Ionicons name="star-outline" size={50} color="white" top={-87} right={-330} />
                    </View>
                </View>            
            </View>
        }
        keyExtractor={(item) => item.id.toString()}
        />

    );
    };

    const styles = StyleSheet.create({
        container: {
          padding: 50,
          flex: 1,
        },
        item: {
          padding: 20,
          fontSize: 15,
          marginTop: 5,
        }
      });

export default Outfits;