import { View, Text, Button, Image, StatusBar } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import LogoWith from "../../../access/login/logoWhite.png"
const Header = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={{ height: 160, width: '100%', backgroundColor: '#BF2F34', justifyContent: 'center', marginBottom: 30 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 45, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
        <Icon style={{ flex: 1, paddingLeft: 15 }} onPress={() => navigation.openDrawer()} name="bars" size={30} color="#fff" />
        <Image style={{ flex: 2, resizeMode: "contain" }} source={LogoWith} />
        <View style={{ flex: 1, paddingRight: 15, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Icon name="bells" size={30} color="#fff" />
        </View>
      </View>
      <View style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      {/* <Text>Header</Text> */}
    </View>
  )
}


export default Header