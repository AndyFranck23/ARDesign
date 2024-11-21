import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const MyTextInput = ({ placeholder, handlechangeText, value, title }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={styles.titre}>{title} </Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.Input}
                    placeholder={placeholder}
                    onChangeText={handlechangeText}
                    value={value}
                    secureTextEntry={((title == "Mot de pass") || (title == "Confirmer")) && !showPassword}
                    placeholderTextColor={'#689DB4'}
                />
                {
                    title === 'Mot de pass' && (
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                            <View style={styles.view} >
                                <Image
                                    source={!showPassword ? require('../../assets/images/Eye.png') : require('../../assets/images/logo4.png')}
                                    resizeMode='contain'
                                    style={styles.showPassword}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View >
    )
}

export default MyTextInput

const styles = StyleSheet.create({
    Input: {
        padding: 10,
        borderBottomWidth: 1,
        width: 300,
        borderColor: '#ccc',
        color: 'white',
    },

    titre: {
        fontSize: 15,
        color: 'white'
    },

    showPassword: {
        width: 25,
        height: 25,

    },

    view: {
        position: 'absolute',
        right: 0,
        top: '25%',
        zIndex: 50,
        padding: 5
    }
})