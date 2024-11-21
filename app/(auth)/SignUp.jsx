import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import MyTextInput from '../../components/myDirectory/MyTextInput'
import MyButton from '@/components/myDirectory/MyButton';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const SignUp = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        tryPassword: ''
    })
    const [message, setMessage] = useState('')

    const submit = async () => {
        // ---------------------------------------------------------------------------
        if ((form.firstname && form.lastname && form.email && form.password && form.tryPassword) !== '') {
            if (form.password == form.tryPassword) {
                try {
                    const response = await axios.post('http://192.168.43.218:5000/data', { form })
                    console.log(response.data.data)
                    setMessage('')
                    router.push('Home')
                } catch (e) {
                    setMessage("erreur de connexion: " + e)
                }
            } else {
                setMessage('Mot de pass incorrect')
            }
        } else {
            setMessage('Veuillez remplir tous les champs')
        }
        // ---------------------------------------------------------------------------------
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.view}>
                    <Text style={styles.titre}>
                        S' inscrire
                    </Text>
                    <View>
                        <MyTextInput
                            placeholder="Nom"
                            handlechangeText={(e) => setForm({ ...form, firstname: e })}
                            value={form.firstname}
                            title='Nom'
                        />
                        <MyTextInput
                            placeholder="Prénom"
                            handlechangeText={(e) => setForm({ ...form, lastname: e })}
                            value={form.lastname}
                            title='Prénom'
                        />
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
                        <MyTextInput
                            placeholder="Mot de pass"
                            handlechangeText={(e) => setForm({ ...form, tryPassword: e })}
                            value={form.tryPassword}
                            title='Confirmer'
                        />
                    </View>
                    <MyButton
                        title="Inscrire"
                        handlePress={() => submit()}
                    />
                    <View style={{ paddingTop: 15, flexDirection: 'row' }}>
                        <Text style={{ color: 'gray' }}>Vous avez déjà un compte ?</Text>
                        <Link href='SignIn' style={styles.link}>Se connecter</Link>
                    </View>
                    <Text style={{ color: 'red', paddingTop: 10 }}>{message}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        backgroundColor: '#0B5371',
        flex: 1,
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
