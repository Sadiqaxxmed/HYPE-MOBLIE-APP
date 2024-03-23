import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Page = () => {
    return (
        <View style={styles.container}>

            <View style={{marginTop: 150}}>
            <Text style={{fontFamily: 'pacif-regular', fontSize: 30, marginBottom: 30, left: 140, color: Colors.primary}}>HYPE</Text>

            <TextInput autoCapitalize='none' placeholder='Username, or Email' style={[defaultStyles.inputField, {marginBottom: 30}]}/>
            <TextInput autoCapitalize='none' placeholder='Password' style={[defaultStyles.inputField, {color: 'rgba(128, 128, 128, 0.5)'}]}/>

            <Text style={{marginTop: 10, textAlign: 'right', fontFamily: 'merr-regular', color: Colors.primary}}>Forgot Password?</Text>

            <TouchableOpacity style={[defaultStyles.btn, {marginTop: 30}]}>
                <Text style={defaultStyles.btnText}>Log In</Text>
            </TouchableOpacity>
            </View>

                <Text style={{fontFamily: 'merr-regular', color: 'white', marginTop: 100, marginBottom: 20}}>Don't have an account? </Text>
                <Text style={{fontFamily: 'merr-bold', color: Colors.primary}}>Sign Up</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
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
    btnOutline: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.grey,
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    btnOutlineText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'mon-sb',
    },
});


export default Page;