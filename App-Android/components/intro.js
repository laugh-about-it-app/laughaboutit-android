import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet,
       TouchableHighlight
       } from 'react-native';

class Intro extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      imageIdx: 0,
      messageIdx: 0
    };
  }
  
  render() {
    const imagesArr = [
      'https://s-media-cache-ak0.pinimg.com/564x/23/04/a1/2304a18385e790a38b686de96196e305.jpg',
      'http://images.nationalgeographic.com/wpf/media-live/photos/000/347/cache/golden-labrador-puppy_34708_990x742.jpg'
    ];
    const messagesArr = [
      "Placeholder Text: Puppies #1. Puppies are cute",
      "Placeholder Text: Puppies #2. Puppies are nice"
    ];

    return (
      <View style={style.container}>
      <Text style={style.header}>
        Welcome!
      </Text>
      <Image 
        style={style.image}
        resizeMode={"contain"}
        source={{uri: imagesArr[this.state.imageIdx]}}>
      <View style={style.backDropView}>
        <Text style={style.headline}>This is a test headline. The more I type the more it just goes on and on... </Text>
      </View></Image>
      <Text style={style.body}> {messagesArr[this.state.messageIdx]} </Text>
      <TouchableHighlight onPress={() => {
        this.props.toPage('Create');
      }}>
        <Text style={style.body}> Next </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        this.props.toPage('Home');
      }}>
        <Text> Sign Up! </Text>
      </TouchableHighlight> 
      </View>
    );
  }
}

// Addition of paddingTop to image and backDropView style in order to test text overlay. 
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eedd82',
    flexWrap: 'wrap'
  },
  image: {
    alignSelf: 'center',
    width: 400,
    height: 300,
    paddingTop: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center'
  },
  body: {
    fontSize: 10
  },
  backDropView: {
    height: 120,
    width: 360,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    width: 225,
    alignSelf: 'center'
  }
});

export default Intro

AppRegistry.registerComponent('Intro', () => Intro);