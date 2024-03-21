import { View, SafeAreaView, Text, Image, ListRenderItem, StyleSheet, FlatList, Animated } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Feed from '../listing/[id]';
import FeedHeader from '@/components/FeedHeader';
import Outfits from '@/components/Outfits';

const Page = () => {
    return (
        <SafeAreaView style={{ flex: 1}}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Stack.Screen options={{
                header: () => <FeedHeader />,
            }}/>
            <Outfits />
            </View>
        </SafeAreaView>
    );
};

export default Page;

