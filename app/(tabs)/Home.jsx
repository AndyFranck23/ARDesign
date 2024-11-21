import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import New from './category/New';
import Armoire from './category/armoire'
import Fleure from './category/fleure'
import Fleur from './category/fleur';
import SearchInput from '../../components/myDirectory/SearchInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TabBar from '../../components/myDirectory/tabBar';

function category({ state, descriptors, navigation }) {
    return (
        <View style={{
            flexDirection: 'row', borderBottomWidth: 3, borderColor: '#FFF5BF'
        }} >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name

                const isFocused = state.index === index
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name)
                    }
                }

                return (
                    // style de tous le tabBar
                    <TouchableOpacity key={route.key} onPress={onPress} style={styles.styleCategory}>

                        {/* style de chaque bouton */}
                        <Text style={[styles.styleBoutonCategory, {
                            // style du hover
                            color: isFocused ? 'white' : 'black',
                            backgroundColor: isFocused ? '#FFB600' : '#FFF5BF',
                        }]}>{label}</Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}


export function MenuBar({ toggle }) {
    return (
        <>
            <TouchableOpacity style={styles.overlay} onPress={toggle}></TouchableOpacity>
            <View style={styles.styleMenu} >
                <StatusBar backgroundColor='#161622' style='light' />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/face.png')} style={[{ width: 50, height: 50 }, styles.styleOptionMenu]} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Nom de l'utilisateur</Text>
                        <Text>Nom de l'utilisateur</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.styleOptionMenu}>
                    <Text>Publication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleOptionMenu} >
                    <Text>Paramètre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleOptionMenu} >
                    <Text>Historique</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleOptionMenu} >
                    <Text>Commandes et paiements</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleOptionMenu} >
                    <Text>A propos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleOptionMenu} >
                    <Text>Se Déconnecter</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


const Tab = createMaterialTopTabNavigator()


const Home = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#0B5371', height: '100%', zIndex: 1000 }} >
                <TabBar toggle={toggleMenu} />
                {/* Bar de menu */}
                {menuVisible && (<MenuBar toggle={toggleMenu} />)}

                <Tab.Navigator tabBar={({ state, descriptors, navigation }) => category({ state, descriptors, navigation })} >
                    <Tab.Screen name='New' component={New} />
                    <Tab.Screen name='armoire' component={Armoire} />
                    <Tab.Screen name='fleur' component={Fleur} />
                    <Tab.Screen name='fleure' component={Fleure} />
                </Tab.Navigator>

            </SafeAreaView>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    styleMenu: {
        paddingTop: 50,
        position: 'absolute',
        backgroundColor: '#dddddd',
        zIndex: 1000,
        height: '120%',
        width: 80 + '%',
    },

    styleOptionMenu: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 50,
        marginHorizontal: 10,
    },

    styleBoutonCategory: {
        backgroundColor: '#dddddd',
        padding: 10,
        borderRadius: 50,
        paddingHorizontal: 20,
        fontSize: 12, // le style qu'il faut changer selon la taille de l'ecran
    },

    styleCategory: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },

    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.541)',
        zIndex: 500,
        position: 'absolute',
        height: '200%',
        width: '100%',
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
    }
})


