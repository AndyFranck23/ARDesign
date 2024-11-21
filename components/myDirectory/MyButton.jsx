import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { useFonts } from 'expo-font'

const MyButton = ({ title, handlePress }) => {
    return (
        <TouchableOpacity
            style={styles.styleSubmitBtn}
            onPress={handlePress}
            activeOpacity={0.5}
        >
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({
    styleSubmitBtn: {
        backgroundColor: '#FFF5BF',
        height: 45,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 5,
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 1,
        shadowColor: 'black',
        elevation: 10,
        shadowRadius: 5
    },

    title: {
        fontFamily: 'Roboto',
        color: '#0B5371',
        fontSize: 18,
    }
})