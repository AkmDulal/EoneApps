import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    resizeMode: 'stretch',
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
  totalBg: {
    justifyContent: "center",
    alignItems: "center"
  },
  toBag: {
    width: "100%",
    backgroundColor: "#bf2e34",
    height: 400,
    position: "relative",
    justifyContent: "center", alignItems: "center"
  },
  contantBox: {
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    top: 120,
  },
  text: {
    color: '#333',
    marginTop: 92,
    textAlign: 'center',
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    textAlign: "center",
  },
  logoImg: {
    width: 200,
    resizeMode: "contain"
  },
  imgBg: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -130,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  imgBrd: {
    width: 300,
    resizeMode: "contain"
  },
  text: {
    color: "#222",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 40
  },
  buttonCircle: {
    width: 100,
    height: 40,
    backgroundColor: '#bf2e34',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textColor: {
    color: "#fff"
  }
});
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Empowering Artisans , Farmers & Micro Business',
    image: require('../../access/login/logoWhite.png'),
    imageBord: require('../../access/onbrd1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Connecting NGOs , Social Enterprises with Communities',
    image: require('../../access/login/logoWhite.png'),
    imageBord: require('../../access/onbrd1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'Donate , Invest & Support infrastructure projects',
    image: require('../../access/login/logoWhite.png'),
    imageBord: require('../../access/onbrd1.jpg'),
    backgroundColor: '#59b2ab',
    color: "#222"
  }
];


export class OnboardingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false
    }
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.totalBg}>
          <View style={styles.toBag}>
            <View style={styles.contantBox}>
              <Image style={styles.logoImg} source={item.image} />
            </View>
          </View>
          <View style={styles.imgBg}>
            <Image style={styles.imgBrd} source={item.imageBord} />
          </View>
          <Text style={styles.text}> {item.text} </Text>
        </View>
      </View>
    );
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textColor}> Next </Text>
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    AsyncStorage.setItem("@data", JSON.stringify('01985834220'));


    // const value = await AsyncStorage.getItem('@user_input');
    // console.log(value, "value")
  }

  componentDidMount() {
    // const data = AsyncStorage.getItem("@data");
    // console.log(data, 'value')
  }


  render() {
    const { navigation } = this.props;
    if (this.state.showRealApp) {
      return navigation.navigate("Home");
    } else {
      return <AppIntroSlider renderNextButton={this._renderNextButton} renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
    }
  }
}

export default OnboardingScreen
