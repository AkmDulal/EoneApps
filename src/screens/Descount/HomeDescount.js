import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// import { ViewPropTypes } from 'deprecated-react-native-prop-types'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export class HomeDescount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          imgUrl: require('../../../access/dicount.png'),
          title: "Famale Wear Discount 70%",
          text: "Periode Mei - Agustus 2022",
        },
        {
          imgUrl: require('../../../access/dicount.png'),
          title: "Famale Wear Discount 70%",
          text: "Periode Mei - Agustus 2022",
        },
        {
          imgUrl: require('../../../access/dicount.png'),
          title: "Famale Wear Discount 70%",
          text: "Periode Mei - Agustus 2022",
        },
        {
          imgUrl: require('../../../access/dicount.png'),
          title: "Famale Wear Discount 70%",
          text: "Periode Mei - Agustus 2022",
        },
        {
          imgUrl: require('../../../access/dicount.png'),
          title: "Famale Wear Discount 70%",
          text: "Periode Mei - Agustus 2022",
        },
      ]
    }
  }

  _renderItem({ item }) {
    return (
      <View style={{
        // backgroundColor: 'lightgreen',
        borderRadius: 5,
        // height: 250,
        padding: 0,
        marginLeft: 15,
        marginRight: 15,
        position: 'relative',

      }}>
        <View style={{ flex: 1, justifyContent: 'center', position: 'relative' }}>

          <View style={{backgroundColor: '#BF2F34', position: 'absolute', width: "65%", zIndex: 1, height: 150, borderTopLeftRadius: 20, borderTopEndRadius: 80, borderBottomStartRadius: 20, borderBottomRightRadius: 70}}>
            <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', paddingTop: 25, paddingLeft: 20 }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: '#fff', paddingLeft: 20, paddingTop: 5 }}>{item.text}</Text>
          </View>
          <Image
            source={item.imgUrl}
            style={styles.image}
          />
        </View>
      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View >
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            slideStyle={{ width: viewportWidth }}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    // position: 'absolute',
    // top: 0,
    // right: 0
  },
})
export default HomeDescount
