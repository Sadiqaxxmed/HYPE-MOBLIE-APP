import { View, SafeAreaView, Text, Image, TouchableOpacity, ListRenderItem, StyleSheet, FlatList, Animated } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Feed from '../listing/[id]';
import FeedHeader from '@/components/FeedHeader';
import Outfits from '@/components/Outfits';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const Page = () => {

    const profile = {
        userName: 'Champagnepapi',
        userImage: 'https://shorturl.at/doqGP',
        subscribers: 146,
        bio: 'Just a kid from Toronto 🦉',
        rating: 4.8,
    }


    const outfits = [
        {
            id: '1',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '2',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '3',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '4',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '5',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '6',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '7',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
        {
            id: '8',
            image: 'https://shorturl.at/vyCFW',
            rating: 4.8,
        },
    ]

    return (
        // <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Stack.Screen options={{
                    header: () => null,
                }}/>
                <View style={{ backgroundColor: '#1E1E1E', height: 350, width: 430, top: 50, left: 0, borderRadius: 0}}>
                    <View style={{ flexDirection: 'row', top: 20, left: 20, }}>
                        <Image source={{ uri: profile.userImage }} style={{ top: 10, left: 5, height: 100, width: 100, borderRadius: 50, }} />
                        <View style={{position: 'absolute', top: 15, right: 35, height: 20, width: 40, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(234, 79, 79, 0.5)'}}>
                            <Text style={{ color: 'rgba(234, 79, 79, 0.7)', fontSize: 10, fontWeight: 'bold'}}>Hype</Text>
                        </View>
                        <View style={{ flexDirection: 'column', left: 20, top:20, }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: -10, left: 10 }}>{profile.userName}</Text>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', top: 0, right: -10}}>{profile.subscribers}M Subs · {profile.rating}</Text>
                            <Ionicons name="star-outline" size={20} color="white" style={{ top: -21, right: -155}} />
                            <Text style={{ color: 'white', fontSize: 15, top: 45, left: -110 }}>{profile.bio}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ height: 40, width: 190, borderRadius: 10, backgroundColor: Colors.primary, position: 'absolute', top: 235, right: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Share</Text>
                        {/* <FontAwesome5 name="share" size={20} color="white" style={{ top: -20, left: 50 }} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 40, width: 190, borderRadius: 10, backgroundColor: Colors.grey, position: 'absolute', top: 235, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Edit</Text>
                        {/* <FontAwesome5 name="share" size={20} color="white" style={{ top: -20, left: 50 }} /> */}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: 200, left: 0, borderTopWidth: 0.5, borderTopColor: Colors.grey }}>
                        <TouchableOpacity style={{ height: 40, width: 190, borderRadius: 10, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome6 name="shirt" size={20} color="white" style={{right: 10}} />
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Closet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, width: 190, borderRadius: 10, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="collections-bookmark" size={24} color="white" style={{right: 10}} />
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Collections</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ top: 60, left: 10, height: 500, width: '100%', backgroundColor: 'transparent' }}>
                    <FlatList
                        data={outfits}
                        keyExtractor={(item) => item.id}
                        numColumns={2} // Set number of columns to 2
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Image source={{ uri: item.image }} style={{ height: 300, width: 200, borderRadius: 20 }} />
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        // </SafeAreaView>
    );
    };

export default Page;