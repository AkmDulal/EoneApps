import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React from 'react'

// const categories = ['ALl', 'Beauty', "Woman's Fashion", "Man's Fashion" , "Test", "Man's Fashion" , ]

const Categories = () => {
    const names = [
        {
            index: "1",
            name: "All",
        },
        {
            index: "2",
            name: "Beauty",
        },
        {
            index: "3",
            name: "Woman's Fashions",
        },
        {
            index: "4",
            name: "Man's Fashions",
        },
        {
            index: "5",
            name: "All",
        },
        {
            index: "6",
            name: "Beauty",
        },
        {
            index: "7",
            name: "Woman's Fashions",
        },
        {
            index: "8",
            name: "Man's Fashions",
        },
    ];
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {names.map((category, index) => (
                <TouchableOpacity key={index} style={styles.chipsItem}>
                    <Text>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 30,
        backgroundColor: "blue",
        margin: 20,
        color: "white",
    },
    containerdd: {
        flex: 1,
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 10,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
});


export default Categories