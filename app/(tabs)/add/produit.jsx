import React from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import AddStyle from './AddStyle';

const Produit = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: '#dddddd' }} >
            <View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AddStyle.container} >
                    <Image source={require('../../../assets/images/face.png')} style={AddStyle.styleImage} />
                    <Text>Description</Text>
                    <View style={AddStyle.styleAdd} >
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AddStyle.styleBtn} >
                            <Text>6.99 $</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Produit;
