import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'

const SingUpFrom = ({ navigation }) => {
    const redictLogin = () => {
        navigation.navigate("loginFrom")
    }
    const redictSelectPhoneNum = () => {
        navigation.navigate("SelectphoneNumber")
    }
    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 28 }}> Welcome to E-One </Text>
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, marginTop: 10 }}> Signup to your account </Text>
                <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, width: '100%', justifyContent: 'center', }}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder="First Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder="Last Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder="Email"
                        keyboardType="email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder="Password"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder="Re-enter Password"
                        keyboardType="numeric"
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}} >
                        <Button onPress={redictSelectPhoneNum} style={styles.buttonCss}> Creact </Button>
                        <Text style={{marginTop: 15, color: '#fff'}}> Have an account ?<Text onPress={redictLogin} style={{ fontWeight: 'bold' }}> Sing in </Text> </Text>
                    </View>
                </View>
            </ScrollView>
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
    },
    input: {
        margin: 12,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#fff'
    },
    buttonCss: {
        backgroundColor: '#fff',
        width: 300,
        marginTop: 15,
    }
})

export default SingUpFrom