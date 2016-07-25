import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet,
       TouchableHighlight
       } from 'react-native';

import Swiper from './Swipe.js';
import api from '../util/api.js';

/* **************************** MAIN HOME COMPONENT ******************************** */

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
      }],
      imageData: this.props.imageData,
      captions: this.props.captions
    }
  }

  getPicture() {
    console.log('****** STARTING GET DAILY RAW IMAGE ******* ');
    api.getDailyRawImage((data) => {
      console.log('******* THIS IS THE DATA CALLBACK********', JSON.parse(data._bodyText));
      this.setState({imageData: JSON.parse(data._bodyText)});
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={{flex: 1}} imageData={this.state.imageData} captions={this.state.captions} toPage={this.props.toPage}/>
      </View>
    );
  }
}

/* **************************** HELPER DATA AND VARIABLES ******************************** */

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