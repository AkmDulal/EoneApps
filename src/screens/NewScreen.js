import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Layout from './../components/Layout/Layout'
import Categories from "./../components/Categories/Categories"
import CategoriesBox from "./../components/Categories/CategoriesBox"
import HomeDescount from "./Descount/HomeDescount"


const NewScreen = ({ navigation }) => {
  // const headerHeight = 58 * 2;
  return (
    <View>
      <ScrollView  stickyHeaderIndices={[0]}>
        <Layout navigation={navigation} />
        <Categories />
        {/* <CategoriesBox />
        <HomeDescount /> */}
      </ScrollView>
    </View>
  )
}

export default NewScreen