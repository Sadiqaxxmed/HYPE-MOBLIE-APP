import { View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Feed from '../listing/[id]';
import FeedHeader from '@/components/FeedHeader';
import Outfits from '@/components/Outfits';

const Page = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{
                header: () => <FeedHeader />,
            }}/>
            <Outfits />
        </View>
    );
};

export default Page;