import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchInput = () => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Rechercher..."
                placeholderTextColor={'#689DB4'}
                color="black"
            />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        width: 230,
        height: 40,
        backgroundColor: '#FFF5BF',
        borderRadius: 50,
        color: 'white',
    }
})