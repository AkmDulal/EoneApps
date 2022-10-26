import React from 'react'
import { ImageBackground, TouchableOpacity, StyleSheet, View, Text, Image, StatusBar, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Images from "../../../access/Splash-2.png"
import TopImg from "../../../access/login/top.png"
import BottomImg from "../../../access/login/bottom.png"
import Logo from "../../../access/login/logo.png"

const HomeScreen = ({ navigation }) => {
    const rediractPages = () => {
        navigation.navigate("loginFrom")
    }
    const rediractRegPages = () => {
        navigation.navigate("SingupFrom")
    }
    const removeData = async () => {
        await AsyncStorage.removeItem('@data')
    }
    return (
        <ImageBackground source={Images} resizeMode="cover" style={styles.image}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.imageTop} source={TopImg} />
            <Image style={styles.BottomImg} source={BottomImg} />
            <Image source={Logo} />
            <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.text}>Create your fashion in your own way</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={rediractPages} style={styles.buttonTxt}>
                    <Text style={styles.textTwo}> Login </Text>
                </TouchableOpacity>
                <Text> - OR - </Text>
                <TouchableOpacity onPress={rediractRegPages} style={styles.buttonTxtTwo}>
                    <Text style={styles.textBottomTwo}> Register </Text>
                </TouchableOpacity>
                <Text onPress={removeData} style={styles.textBottomThree}> Clear All Cash </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        position: 'relative',
        textAlign: "center",
    },
    imageTop: {
        position: 'absolute',
        top: 0
    },
    BottomImg: {
        position: 'absolute',
        bottom: 0
    },
    text: {
        color: "black",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10
    },
    textTwo: {
        color: "black",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "center",
    },
    textBottomTwo: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "center",
    },
    textBottomThree: {
        color: "#222",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "center",
    },
    buttonTxt: {
        height: 50,
        width: 200,
        margin: 12,
        borderWidth: 1,
        justifyContent: "center",
        textAlign: "center",
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    buttonTxtTwo: {
        height: 50,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderColor: "#b33c40",
        justifyContent: "center",
        textAlign: "center",
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#b33c40'
    },
});

export default HomeScreen