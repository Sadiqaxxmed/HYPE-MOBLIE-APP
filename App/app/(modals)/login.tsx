import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const Page = () => {
    return (
        <View style={styles.container}>

            <Text style={{fontFamily: 'pacif-regular', fontSize: 30, marginBottom: 30, left: 140, color: Colors.primary}}>HYPE</Text>
            <TextInput autoCapitalize='none' placeholder='Phone Number, Username, or Email' style={[defaultStyles.inputField, {marginBottom: 30}]}/>
            <TextInput autoCapitalize='none' placeholder='Password' style={[defaultStyles.inputField]}/>
            <Text style={{marginTop: 10, textAlign: 'right', fontFamily: 'merr-regular', color: Colors.primary}}>Forgot Password?</Text>
            <TouchableOpacity style={[defaultStyles.btn, {marginTop: 30}]}>
                <Text style={defaultStyles.btnText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.seperatorView}>
                <View style={{flex: 1, borderBottomColor: '#000', borderBottomWidth: StyleSheet.hairlineWidth}} />
                <Text style={styles.seperator}>or</Text>
                <View style={{flex: 1, borderBottomColor: '#000', borderBottomWidth: StyleSheet.hairlineWidth}} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26,
    },
    seperatorView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 30,
    },
    seperator: {
        fontFamily: 'merr-regular',
        color: Colors.grey,
    },
});


export default Page;