import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Manimg from "../../../access/login/fromBg.png"
import { AuthContext } from '../../components/context';
import Users from '../../model/users';

const LoginFrom = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item => {
            const data = userName == item.username & password === item.password;
            console.log(data, "2222222")
            return userName == item.username & password === item.password;
        });
        

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser);
    }
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <ScrollView nestedScrollEnabled={true} >
                <View style={styles.fromBackArea}>
                    <Text style={{ fontSize: 24, position: 'absolute', top: 150, left: 30, color: "#fff", fontWeight: "bold" }}>Welcome Back!</Text>
                    <Text style={{ fontSize: 16, position: 'absolute', textTransform: "uppercase", bottom: 30, left: 30, color: "#fff", fontWeight: "bold" }}>Log In</Text>
                    <Icon onPress={() => RedicrckHome()} style={{ fontSize: 24, position: 'absolute', top: 50, left: 30 }} name="arrowleft" color="#fff" />
                    <Image style={styles.imagesCls} source={Manimg} />
                </View>
                <View style={{ padding: 20, paddingTop: 30, paddingBottom: 0 }}>
                    <TextInput
                        label="Email Address"
                        style={{ backgroundColor: '#fff', marginBottom: 30, borderColor: '#f00' }}
                        mode="outlined"
                        primary='#f00'
                        keyboardType="email-address"
                        left={<TextInput.Icon icon="email" />}
                        autoCapitalize='none'
                        theme={styles.textInputOutlineStyle}
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    <TextInput
                        label="Password"
                        style={{ backgroundColor: '#fff', borderColor: '#222' }}
                        mode="outlined"
                        secureTextEntry
                        left={<TextInput.Icon icon="eye" />}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        style={styles.checkbox}
                        onValueChange={() => setSelection(!isSelected)}
                        color={isSelected ? "#222" : undefined}
                        text='Remeber me'

                    />
                    <Text style={styles.label}>Remeber me</Text>
                    <Text style={{ position: 'absolute', right: 20, top: 37, fontWeight: 'bold' }} >Forgot Password?</Text>
                </View>
                <TouchableOpacity onPress={() => { loginHandle(data.username, data.password) }} style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Button style={{ width: '50%', backgroundColor: `${isSelected ? '#BF2F34' : '#2222'}`, marginTop: 20, }} disabled={!isSelected} icon="camera" mode="contained">
                        LOG IN
                    </Button>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }} >
                    {/* <Text style={{ marginTop: 20 }}> Not registered yet ? <Text onPress={redictReg} style={{ fontWeight: 'bold' }}> Create an Account </Text>   </Text> */}
                </View>
            </ScrollView>
        </View>
    )
}
export default LoginFrom

const styles = StyleSheet.create({
    fromBackArea: {
        backgroundColor: "#BF2F34",
        height: 350,
        width: "100%",
        justifyContent: "center",
        paddingRight: 50,
        position: "relative"

    },
    checkboxContainer: {
        flexDirection: "row",
        paddingLeft: 15,
        paddingTop: 30,
        position: 'relative',
        width: '100%',
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        textAlign: 'left'
    },
    labelForget: {
        margin: 8,
    },
    imagesCls: {
        alignSelf: 'flex-end',
        opacity: .5
    },
    textInputOutlineStyle: {
        colors: {
            text: 'black', primary: '#BF2F34',
            underlineColor: '#f00',
            background: '#0f1a2b'
        }
    }
})