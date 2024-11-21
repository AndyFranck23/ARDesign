import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import MyTextInput from '../../components/myDirectory/MyTextInput'
import MyButton from '@/components/myDirectory/MyButton';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')

    const submit = async () => {
        if ((form.email && form.password) !== '') {
            // try {
            //     let response = await axios.get("http://192.168.43.218:5000/data")
            //     let email = response.data.email
            //     let password = response.data.password
            //     if (email == form.email && password == form.password) {
            //     } else {
            //         setMessage('Mot de pass incorrect')
            //     }
            setMessage('')
            router.replace('Home')
            // } catch (e) {
            //     setMessage('erreur de connexion: ' + e)
            // }
        } else {
            setMessage('Veuillez remplir tous les champs')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ height: '100%' }} >
                <View style={styles.view}>
                    <Image source={require('../../assets/images/logo4.png')} style={styles.Image} />
                    <Text style={styles.titre}>
                        Se connecter
                    </Text>
                    <View style={{ paddingBottom: 30 }}>
                        <MyTextInput
                            placeholder="email"
                            handlechangeText={(e) => setForm({ ...form, email: e })}
                            value={form.email}
                            title='Email'
                        />
                        <MyTextInput
                            placeholder="Mot de pass"
                            title='Mot de pass'
                            handlechangeText={(e) => setForm({ ...form, password: e })}
                            value={form.password}
                        />
                    </View>
                    <MyButton
                        title="Se connecter"
                        handlePress={() => submit()}
                    />
                    <View style={{ paddingTop: 15, flexDirection: 'row' }}>
                        <Text style={{ color: 'gray' }}>Vous n' avez pas de compte ?</Text>
                        <Link href='SignUp' style={styles.link}>Inscrire</Link>
                    </View>
                    <Text style={{ color: 'red', top: 10 }}>{message}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0B5371',
        height: '100%',
    },

    view: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: 4,
    },

    Image: {
        width: 90,
        height: 120,
    },

    titre: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFb600',
        fontSize: 20
    },

    link: {
        color: '#FFb600',
        left: 10
    }
})
