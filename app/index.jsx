import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyButton from '../components/myDirectory/MyButton'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={styles.areaView}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={styles.view}>
          <Image source={require('../assets/images/logo4.png')} style={{ width: 130, height: 200 }} />
          <MyButton
            title='Continuer'
            handlePress={() => router.push('SignIn')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  areaView: {
    backgroundColor: '#0B5371',
    height: '100%',
  },

  view: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 4,
  }
})