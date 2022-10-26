import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PhoneVerification = ({navigation}) => {
    // const [otp, setOtp] = useState('')
    
    const redirectFunction = () => {
        AsyncStorage.setItem("validAuth", JSON.stringify('true'));
        // window.location.reload(false);
        navigation.navigate("loginFrom")
    }
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Phone Verification</Text>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', paddingLeft: 15, paddingRight: 15 }}> Enter your OTP code here </Text>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <OTPInputView
                    style={{ width: '80%', height: 200 }}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingLeft: 15, paddingRight: 15, marginBottom: 5 }}> Didn't received any code? </Text>
                <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center', paddingLeft: 15, paddingRight: 15, marginBottom: 20 }}> Resent new code </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={redirectFunction}>
                    <Text>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BF2F34",
        position: "relative",
        flex: 1,
        justifyContent: 'center',
        paddingTop: 100,
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 300,
        height: 40,
        borderRadius: 30
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
})


export default PhoneVerification