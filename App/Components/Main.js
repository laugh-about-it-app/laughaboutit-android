import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import api from './../Utils/api';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350, // change to fullscreen?
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export class Main extends Component {
  constructor(props) { // which props, from where?
    super(props)
    this.state = {
      imageId: 0,
      images: ['https://s3-us-west-1.amazonaws.com/labitapp/dog1.jpeg', 'https://s3-us-west-1.amazonaws.com/labitapp/dog2.jpeg', 'https://s3-us-west-1.amazonaws.com/labitapp/dog3.jpeg'],
      imageText: ['Image1', 'Image2', 'Image3']
    } // NOTE: this way we don't need 3 separate pages for images.
  } // we can just swap in/out the images and text.
    // which do we prefer? could use testing. Login button is the same on each.

  handleSignup() {
    console.log('handle signup');

  // on button click - navigate user to 3rd party login service?

  // if login successful: this.goToHomeFeed.bind(this);
  // else: ??

  }

  // goToHomeFeed() {
  //   this.props.navigator.push({
  //     component: HomeFeed,
  //     title: 'Home Feed of Daily LABs',
  //     passProps: { // api.getDailyCaptions() && userinfo ?  }
  //   })
  // }

  nextImage(imageId) {
    if (this.state.imageId < 2) {
      this.setState({imageId: this.state.imageId + 1});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>TEST</Text>
        {/*<Image source={{uri: 'https://s3-us-west-1.amazonaws.com/labitapp/dog1.jpeg'}} style={styles.image}/>

        <Image source={{uri: this.state.images[this.state.imageId]}} style={styles.image} />
        <Text> { this.state.imageText[this.state.imageId] } </Text>

        <TouchableHighlight onPress={this.nextImage.bind(this)}>
            <Text style={styles.buttonText}> Next </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.handleSignup.bind(this)}>
            <Text style={styles.buttonText}>Sign Up!</Text>
        </TouchableHighlight>*/}
      </View>
    )
  }
}
