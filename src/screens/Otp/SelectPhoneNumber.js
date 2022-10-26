import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import React, { useState, useRef } from 'react'

const SelectPhoneNumber = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Verify your phone number</Text>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', paddingLeft: 15, paddingRight: 15 }}>We have sent you an SMS with a code to<Text style={{ width: '100%' }}>  enter number </Text></Text>
            <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                containerStyle={{ backgroundColor: 'transparent', color: '#fff' }}
                keyboardType="phone-pad"
                textInputStyle={{ color: "#ffffff" }}
                codeTextStyle={{ color: "#ffffff" }}
                textInputProps={{placeholderTextColor:"#ffffff"}}
                textContainerStyle={{ backgroundColor: 'transparent' }}
                inputStyle={{
                    background: "transparent"
                }}
                defaultCode="BD"
                onChangeFormattedText={(text) => {
                    setValue(text);
                }}
                withDarkTheme
                autoFocus
            />
            <Text style={{ color: '#fff', marginBottom: 10 }}>Or login with Social network</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        const checkValid = phoneInput.current?.isValidNumber();
                        setValid(checkValid ? checkValid : false);
                        navigation.navigate("Phoneverification")
                        //proceed
                    }}>
                    <Text>Next</Text>
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
    }
})

export default SelectPhoneNumber