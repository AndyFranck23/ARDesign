import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const Fleure = () => {
    return (
        <ScrollView style={{ backgroundColor: '#0B5371' }} >
            <View style={{ padding: 5, alignItems: 'center' }}>
                <View style={styles.container} >
                    <View style={styles.pub}>
                        <Image
                            source={require('../../../assets/images/tableronde1.jpg')}
                            style={{ width: 160, height: 180, borderRadius: 5 }}
                        />
                        <Image
                            source={require('../../../assets/images/Tableronde2.jpg')}
                            style={{ width: 160, height: 180, borderRadius: 5 }}
                        />
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <Text>
                            Table ronde (Salon).
                        </Text>
                        <Text>
                            Table en bois palissendre.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                        <Text style={{ color: '#FFB600' }}>
                            250.000 Ar
                        </Text>
                        <TouchableOpacity onPress={() => router.push('Photo')}>
                            <Image
                                source={require('../../../assets/images/Camera.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container} >
                    <View style={styles.pub}>
                        <Image
                            source={require('../../../assets/images/vases2.jpg')}
                            style={{ width: 160, height: 180, borderRadius: 5 }}
                        />
                        <Image
                            source={require('../../../assets/images/vase3.jpg')}
                            style={{ width: 160, height: 180, borderRadius: 5 }}
                        />
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <Text>
                            Table ronde (Salon).
                        </Text>
                        <Text>
                            Table en bois palissendre.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                        <Text style={{ color: '#FFB600' }}>
                            250.000 Ar
                        </Text>
                        <TouchableOpacity onPress={() => router.push('Photo')}>
                            <Image
                                source={require('../../../assets/images/Camera.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container} >
                    <View style={styles.pub}>
                        <Image
                            source={require('../../../assets/images/vase3.jpg')}
                            style={{ width: 160, height: 180, borderRadius: 5 }}
                        />
                        <Image
                            source={require('../../../assets/images/Tableronde2.jpg')}
                            style={{ width: 160, height: 180, borderRadius: 5 }}
                        />
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <Text>
                            Table ronde (Salon).
                        </Text>
                        <Text>
                            Table en bois palissendre.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                        <Text style={{ color: '#FFB600' }}>
                            250.000 Ar
                        </Text>
                        <TouchableOpacity onPress={() => router.push('Photo')}>
                            <Image
                                source={require('../../../assets/images/Camera.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

export default Fleure;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        paddingTop: 10,
        borderRadius: 5,
        marginVertical: 5,
    },

    pub: {
        flexDirection: 'row'
    }
})
