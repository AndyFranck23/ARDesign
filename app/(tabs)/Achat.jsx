import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Produit from './add/produit'
import Produit2 from './add/produit2'
import Produit3 from './add/produit3'
import Produit4 from './add/produit4'
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../../components/myDirectory/tabBar';
import { MenuBar } from './Home';

function category({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }} >
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
                    <TouchableOpacity key={route.key} onPress={onPress} style={style.styleCategory}>

                        {/* style de chaque bouton */}
                        <Text style={[style.styleBoutonCategory, {
                            // style du hover
                            color: isFocused ? 'white' : 'black',
                            backgroundColor: isFocused ? '#496989' : '#dddddd'
                        }]}>{label}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
const Tab = createMaterialTopTabNavigator()


const Achat = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#0B5371', height: '100%', }} >
            <TabBar toggle={toggleMenu} />
            {/* Bar de menu */}
            {menuVisible && (<MenuBar toggle={toggleMenu} />)}
            <Tab.Navigator tabBar={({ state, descriptors, navigation }) => category({ state, descriptors, navigation })}>
                <Tab.Screen name='produit1' component={Produit} />
                <Tab.Screen name='produit2' component={Produit2} />
                <Tab.Screen name='produit3' component={Produit3} />
                <Tab.Screen name='produit4' component={Produit4} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

export default Achat;
