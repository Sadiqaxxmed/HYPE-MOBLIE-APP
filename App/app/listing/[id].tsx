import {View, Text} from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';

const Feed = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    console.log('🚀 ~ file: [].tsx:7 ~ Page ~ id:', id);
    return (
        <View>
            <Text>Feed</Text>
        </View>
    );
};

export default Feed;