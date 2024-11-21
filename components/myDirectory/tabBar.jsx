import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import SearchInput from './SearchInput';

const TabBar = ({ toggle }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo3.png')} style={{ width: 30, height: 30 }} />
            <SearchInput />
            <TouchableOpacity onPress={toggle} >
                <Image source={require('../../assets/images/Menu.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 5
    }
})

export default TabBar;
