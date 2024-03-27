import { View, SafeAreaView, Text, Image, TouchableOpacity, ListRenderItem, StyleSheet, FlatList, Animated } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Feed from '../listing/[id]';
import FeedHeader from '@/components/FeedHeader';
import Outfits from '@/components/Outfits';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const Page = () => {

    const profile = {
        userName: 'Champagnepapi',
        userImage: 'https://shorturl.at/doqGP',
        subscribers: 146,
        bio: 'Just a kid from Toronto 🦉',
        rating: 4.8,
    }

    return (
        // <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Stack.Screen options={{
                    header: () => null,
                }}/>
                <View style={{ backgroundColor: '#1E1E1E', height: 250, width: 410, top: 130, left: 10, borderRadius: 20}}>

                    <View style={{ flexDirection: 'row', top: 20, left: 20, }}>
                        <Image source={{ uri: profile.userImage }} style={{ top: -10, left: 5, height: 100, width: 100, borderRadius: 50, }} />
                        <View style={{ flexDirection: 'column', left: 20, top: 10, }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', top: -10, left: 10 }}>{profile.userName}</Text>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', top: 0, right: -10}}>{profile.subscribers}M Subs · {profile.rating}</Text>
                            <Ionicons name="star-outline" size={20} color="white" style={{ top: -21, right: -155}} />
                            <Text style={{ color: 'white', fontSize: 15, top: 35, left: -110 }}>{profile.bio}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ height: 40, width: 190, borderRadius: 10, backgroundColor: Colors.primary, position: 'absolute', top: 195, right: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Share</Text>
                        {/* <FontAwesome5 name="share" size={20} color="white" style={{ top: -20, left: 50 }} /> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 40, width: 190, borderRadius: 10, backgroundColor: Colors.grey, position: 'absolute', top: 195, left: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Share</Text>
                        {/* <FontAwesome5 name="share" size={20} color="white" style={{ top: -20, left: 50 }} /> */}
                    </TouchableOpacity>
                    
                </View>
            </View>
        // </SafeAreaView>
    );
    };

export default Page;