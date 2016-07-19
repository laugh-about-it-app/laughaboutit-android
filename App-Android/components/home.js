import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet,
       TouchableHighlight
       } from 'react-native';

import Swiper from './Swipe.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: 0,
      // Setting placeholder for the pictures that would be actually retrieved from a database or API eventually. 
      picturePH: [{uri: 'http://memesvault.com/wp-content/uploads/Doge-Meme-05.png', votes: 0}, {
        uri: 'https://i.imgflip.com/md3m6.jpg', votes: 0
      }, {
          uri: 'http://legendsoflocalization.com/wp-content/uploads/2015/10/doge-2.jpg', votes: 0
      }]
    }
  }
  
  render() {
    /*
    var picture = this.state.picturePH[this.state.currentPic];
    return (
      <View style={styles.container}>
      <Image 
        style={{
          width: 300,
          height: 200,
        }}
        resizeMode={"contain"}
        source={{uri: picture.uri}}
      />
      <Text style={styles.instructions}> Placeholder Text: More Puppies </Text>
      <Text style={styles.instructions}> Votes: {picture.votes} </Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={() => {
          picture.votes++;
          this.setState(picture);
          this.setState({currentPic: this.state.currentPic === 2 ? 0 : this.state.currentPic + 1});
        }}>
          <Text style={styles.instructions}> Upvote </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.setState({currentPic: this.state.currentPic === 2 ? 0 : this.state.currentPic + 1});
        }}>
          <Text style={styles.instructions}> Dislike </Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight onPress={() => {
        this.props.toPage('Intro');
      }}>
        <Text style={styles.instructions}> Next </Text>
      </TouchableHighlight> 
      </View>
    );
    */
    return (
      <View style={styles.container}>
        <Swiper style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eedd82',
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Home

AppRegistry.registerComponent('Home', () => Home);