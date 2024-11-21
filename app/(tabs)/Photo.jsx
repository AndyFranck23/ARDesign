import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

export default function Photo() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null)
    const [photoUri, setPhotoUri] = useState('')
    const [sary, setSary] = useState(false)

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    // pour changer la camera si front
    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync()
            // saveImage(photo.uri)
            setPhotoUri(photo.uri)
            sendImgeToPython(photo.uri)
        }
    }

    const sendImgeToPython = async (uri) => {
        let imageFile = new FormData()
        imageFile.append('file', {
            uri: uri,
            name: 'photo.jpg',
            type: 'image/jpeg'
        })

        try {
            const response = await axios.post('http://192.168.43.218:5000/image', imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data.message)
        } catch (err) {
            console.log("erreur de post", err)
        }
    }

    const Sary = () => {
        setSary(!sary)
    }

    if (sary == true) {
        return (
            <>
                <StatusBar />
                <TouchableOpacity onPress={Sary} style={styles.styleRetour}>
                    <Text>Retour</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <Image source={require('../../codePython/temp_image.jpg')} style={{ height: '100%', width: '100%' }} />
                </View>
            </>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={toggleCameraFacing}>
                            <Image source={require('../../assets/images/tableronde1.jpg')} style={styles.imageSide} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={takePicture}>
                            <Image source={require('../../assets/images/tableronde1.jpg')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCameraFacing}>
                            <Image source={require('../../assets/images/tableronde1.jpg')} style={styles.imageSide} />
                        </TouchableOpacity>
                        {photoUri && (
                            <TouchableOpacity onPress={Sary}>
                                <Image source={require('../../codePython/temp_image.jpg')} style={styles.imageSide} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    styleRetour: {
        marginTop: 50,
        marginLeft: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'absolute',
        backgroundColor: '#FFF5BF',
        borderRadius: 20,
        zIndex: 1000,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        padding: 40,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 90,
        height: 90,
        borderWidth: 5,
        borderColor: '#FFB600',
        borderRadius: 50,
        marginHorizontal: 20
    },
    imageSide: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        marginHorizontal: 5,
        opacity: 0.5
    },
});