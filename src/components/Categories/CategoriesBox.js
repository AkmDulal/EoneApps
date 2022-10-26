import React from 'react'
import { SafeAreaView, ImageBackground, View, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { Surface } from 'react-native-paper';
import Images from "../../../access/catagori_icon/dollar.png"
const persons = [
    {
        id: "1",
        images: require('../../../access/catagori_icon/logo.png'),
        name: "E-One Global",
    },
    {
        id: "2",
        images: require('../../../access/catagori_icon/shopping.png'),
        name: "Grocery Store",
    },
    {
        id: "3",
        images: require('../../../access/catagori_icon/giftvoucher.png'),
        name: "E-One Global",
    },
    {
        id: "4",
        images: require('../../../access/catagori_icon/freeshipping.png'),
        name: "Free Shipping",
    },
    {
        id: "5",
        images: require('../../../access/catagori_icon/makeup.png'),
        name: "E-One Beauty",
    },
    {
        id: "6",
        images: require('../../../access/catagori_icon/mother.png'),
        name: "E-One Beauty",
    },
];

const CategoriesBox = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.categoryContainer}>
                {persons.map((person, i) => {
                    return (
                        <View key={i} style={styles.categoryBtn} elevation={4}>
                            <Text style={{backgroundColor: '#F1F2F1', height: 60, width: 80, position: 'absolute', top: -3, left: -3 }}>  </Text>
                            <Image source={person.images} />
                            <Text style={{ position: 'absolute', color: '#000', bottom: -50, fontSize: 16, textAlign: 'center' }}>{person.name}</Text>
                        </View>
                    );
                })}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    categoryBtn: {
        position: 'relative',
        padding: 8,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 60,
        width: "29%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F2F1',
        borderWidth: 3,
        borderColor: '#BF2F34',
        borderRadius: 10
    },

});

export default CategoriesBox