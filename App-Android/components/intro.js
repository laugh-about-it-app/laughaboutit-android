import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet
       } from 'react-native';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
      <Image 
        style={{
          width: 300,
          height: 200,
        }}
        resizeMode={"contain"}
        source={{uri:'https://s-media-cache-ak0.pinimg.com/564x/23/04/a1/2304a18385e790a38b686de96196e305.jpg'}}
      />
      <Text> Puppies </Text>
      </View>
    );
  }
}

const style = StyleSheet.create();

export default Intro

AppRegistry.registerComponent('Intro', () => Intro);