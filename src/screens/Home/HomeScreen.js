import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import Categories from "../../components/Categories/Categories"
import CategoriesBox from "../../components/Categories/CategoriesBox"
import HomeDescount from "../Descount/HomeDescount"
import NewUserFreeGift from "../FreeGift/NewUserFreeGift"

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

const HomeScreen = ({ navigation }) => {
  // const headerHeight = 58 * 2;
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <Layout navigation={navigation} />
        <Categories />
        <CategoriesBox />
        <HomeDescount />
        <NewUserFreeGift />
      </ScrollView>
    </View>
  )
}

export default HomeScreen