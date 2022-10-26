import { View, Text, ScrollView, Dimensions, Button } from 'react-native'
import React from 'react'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const NewUserFreeGift = () => {
    return (
        <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}>
            <View>
                <Text style={{ fontWeight: "bold", color: '#222', marginBottom: 5, fontSize: 16 }}> New User Free gift  </Text>
                {/* <Button

                    title="See All"
                    color="#841584"
                /> */}
            </View>
            <ScrollView
                // style={{ paddingLeft: 15, paddingRight: 15 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            // nestedScrollEnabled={true}
            // contentContainerStyle={{
            //     flex: 1,
            //     // flexWrap: "wrap",
            // }}
            >
                <Text style={{
                    width: viewportWidth / 2.4,
                    marginVertical: 5,
                    marginHorizontal: 8,
                    borderRadius: 10,
                    height: 150,
                    backgroundColor: '#f00'
                }}>NewUserFreeGift</Text>
                <Text style={{
                    width: viewportWidth / 2.4,
                    marginVertical: 5,
                    marginHorizontal: 8,
                    borderRadius: 10,
                    height: 150,
                    backgroundColor: '#f00'
                }}>NewUserFreeGift</Text>
                <Text style={{
                    width: viewportWidth / 2.4,
                    marginVertical: 5,
                    marginHorizontal: 8,
                    borderRadius: 10,
                    height: 150,
                    backgroundColor: '#f00'
                }}>NewUserFreeGift</Text>
                <Text style={{
                    width: viewportWidth / 2.4,
                    marginVertical: 5,
                    marginHorizontal: 8,
                    borderRadius: 10,
                    height: 150,
                    backgroundColor: '#f00'
                }}>NewUserFreeGift</Text>
            </ScrollView>
        </View>
    )
}

export default NewUserFreeGift