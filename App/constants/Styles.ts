import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFFFF',
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#1E1E1E',
        color: 'white',
    },
    btn: {
        backgroundColor: Colors.primary,
        height: 44,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'merr-bold',
    },
    btnIcon: {
        position: 'absolute',
        left: 16,
    },
});