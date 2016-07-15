import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet
       } from 'react-native';

class Home extends Component {
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
        source={{uri:'http://cdn.lookanimals.com/pictures/www.hdwallpapers.in/walls/yellow_labrador_puppy-wide.jpg'}}
      />
      <Text> More Puppies </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home

AppRegistry.registerComponent('Home', () => Home);