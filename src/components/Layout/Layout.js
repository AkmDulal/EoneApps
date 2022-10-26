import { View, Text } from 'react-native'
import React from 'react'
import Header from "./Header"
const Layout = ({children, navigation}) => {
    return (
        <View>
            <Header navigation={navigation} />
            <Text>{children}</Text>
        </View>
    )
}

export default Layout