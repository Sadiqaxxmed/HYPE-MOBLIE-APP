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
            <TextInput autoCapitalize='none' placeholder='Password' style={[defaultStyles.inputField]}/>

            <Text style={{marginTop: 10, textAlign: 'right', fontFamily: 'merr-regular', color: Colors.primary}}>Forgot Password?</Text>

            <TouchableOpacity style={[defaultStyles.btn, {marginTop: 30}]}>
                <Text style={defaultStyles.btnText}>Log In</Text>
            </TouchableOpacity>
            </View>

        {/* 
            <View style={styles.seperatorView}>
                <View style={{flex: 1, borderBottomColor: '#000', borderBottomWidth: StyleSheet.hairlineWidth}} />
                <Text style={styles.seperator}>or</Text>
                <View style={{flex: 1, borderBottomColor: '#000', borderBottomWidth: StyleSheet.hairlineWidth}} />
            </View>

            <View style={{ gap: 20}}>
                <TouchableOpacity style={styles.btnOutline}>
                    <Ionicons name="call-outline" size={24} color="black" style={defaultStyles.btnIcon} />
                    <Text style={styles.btnOutlineText}>Continue with Phone</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnOutline]}>
                    <Text style={styles.btnOutlineText}>Continue with Google</Text>
                </TouchableOpacity>
            </View> */}

                <Text style={{fontFamily: 'merr-regular', color: Colors.grey, marginTop: 100, marginBottom: 20}}>Don't have an account? </Text>
                <Text style={{fontFamily: 'merr-bold', color: Colors.primary}}>Sign Up</Text>

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