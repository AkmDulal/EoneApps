import { View, Text, Button } from 'react-native'
import React from 'react'

const Normal = ({route, navigation}) => {
    const data = () => {
        navigation.navigate("Home")
    }
  return (
    <View>
      <Text>Normal</Text>
      <Button title='Go Back' onPress={data} />
    </View>
  )
}

export default Normal