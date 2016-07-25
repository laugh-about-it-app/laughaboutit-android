import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet,
       TouchableHighlight
       } from 'react-native';

import Swiper from 'react-native-swiper';

// Swiper is a useful swipe animation, but requires views to be hardcoded instead of accessed 
// dynamically
class MySwipe extends Component {
  render() {
    return (
      <Swiper style={style.container} showsButtons={true}>
        <View style={style.slide1}>
          <Image style={style.image} resizeMode={'contain'} source={{uri: this.props.imagesArr[0]}}/>
          <Text style={style.text}>{this.props.messagesArr[0]}</Text>
          <TouchableHighlight onPress={() => {
            this.props.toPage('Home');
          }}>
            <Text> Sign Up! </Text>
          </TouchableHighlight> 
        </View>
        <View style={style.slide2}>
          <Image style={style.image} resizeMode={'contain'} source={{uri: this.props.imagesArr[1]}}/>
          <Text style={style.text}>{this.props.messagesArr[1]}</Text>
          <TouchableHighlight onPress={() => {
            this.props.toPage('Home');
          }}>
            <Text> Sign Up! </Text>
          </TouchableHighlight>
        </View>
        <View style={style.slide3}>
          <Image style={style.image} resizeMode={'contain'} source={{uri: this.props.imagesArr[2]}}/>
          <Text style={style.text}>{this.props.messagesArr[2]}</Text>
          <TouchableHighlight onPress={() => {
            this.props.toPage('Home');
          }}>
            <Text> Sign Up! </Text>
          </TouchableHighlight>
        </View>
      </Swiper>
    );
  }
}

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
      'http://images.nationalgeographic.com/wpf/media-live/photos/000/347/cache/golden-labrador-puppy_34708_990x742.jpg',
      'https://www.greenfieldpuppies.com/wp-content/plugins/gfp/images/big/pup_x_1362172052_0.jpg'
    ];
    const messagesArr = [
      "Welcome to Laugh About It, a social app to share comedic captions from your mind to the world!",
      "Using the app is simple, just swipe right for captions you like, and swipe left for captions you don't care for.",
      "Signing up is easy, do it today!"
    ];

    return (
      <View style={style.container}>
        <MySwipe imagesArr={imagesArr} messagesArr={messagesArr} toPage={this.props.toPage}/>
      </View>
    );

    // return (
    //   <View style={style.container}>
    //   <Text style={style.header}>
    //     Welcome!
    //   </Text>
    //   <Image 
    //     style={style.image}
    //     resizeMode={"contain"}
    //     source={{uri: imagesArr[this.state.imageIdx]}}>
    //   <View style={style.backDropView}>
    //     <Text style={style.headline}></Text>
    //   </View></Image>
    //   <Text style={style.body}> {messagesArr[this.state.messageIdx]} </Text>
    //   <TouchableHighlight onPress={() => {
    //     this.setState({messageIdx: this.state.messageIdx > 1 ? 0 : this.state.messageIdx + 1});
    //     this.setState({imageIdx: this.state.imageIdx > 1 ? 0 : this.state.imageIdx + 1})
    //   }}>
    //     <Text style={style.body}> Next </Text>
    //   </TouchableHighlight>
    //   <TouchableHighlight onPress={() => {
    //     this.props.toPage('Home');
    //   }}>
    //     <Text> Sign Up! </Text>
    //   </TouchableHighlight> 
    //   </View>
    // );
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
    fontSize: 12,
    padding: 10
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
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Intro

AppRegistry.registerComponent('Intro', () => Intro);