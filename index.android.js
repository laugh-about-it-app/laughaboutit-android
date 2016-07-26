/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Intro from './App-Android/components/intro.js';
import Home from './App-Android/components/home.js';
import Signup from './App-Android/components/signup.js';
import CreateCaption from './App-Android/components/caption.js';
import LeaderBoard from './App-Android/components/leaderboards.js';
import api from './App-Android/util/api.js';

// Main purpose of this class is to act as a router/navigator for the app. 
class laughaboutit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageData: {url: 'https://s3-us-west-1.amazonaws.com/labitapp/dog1.jpeg'},
      dailyCaptions: [{id: 0, caption_top: '', caption_bottom: '', likes: 0, dislikes: 0}]
    };
    this.getPicture();
    this.getCaptions();
  }

  getPicture() {
    console.log('****** STARTING GET DAILY RAW IMAGE ******* ');
    api.getDailyRawImage((data) => {
      console.log('******* THIS IS THE DATA CALLBACK********', JSON.parse(data._bodyText));
      this.setState({imageData: JSON.parse(data._bodyText)});
    });
  }

  getCaptions() {
    api.getDailyCaptions((data) => {
      console.log('********* THIS IS THE DAILY CAPTIONS ********', data);
      this.setState({dailyCaptions: data});
    });
  }

  render() {

    // Creates an array for the initial route stack. May be unnecessary to have initial route stack
    // so pending re-examination and possible removal. 
    const routeStack = [{name: 'Intro', index: 0}, {name: 'Home', index: 1}];

    // renderScene is the main bread and butter of the navigation as it is passed into the 
    // Navigator component in order to route between different components. 
    var renderScene = (route, navigator) => {

    /* ******************* HELPER FUNCTIONS TO BE PASSED TO CHILD COMPONENTS ***************** */

      var onForward = () => {
        const nextIndex = route.index + 1;
        navigator.push({name: route.name === 'Intro' ? 'Home' : 'Intro', index: nextIndex});
      }

      var onBack = () => {
        route.index > 0 ? navigator.pop() : null;
      }

      // Main function to implement dynamic navigation:
      var toPage = (pageName) => {
        const nextIndex = route.index + 1;
        navigator.push({name: pageName, index: nextIndex});
      }

      /* **************************** MAIN BODY OF THE ROUTER ******************************** */

      if (route.name === 'Intro') {
        return <Intro title={'Welcome'} navigator={navigator} onForward={onForward} toPage={toPage} imageData={this.state.imageData} {...route.passProps}/>
      }
      if (route.name === 'Home') {
        return <Home title={'Home'} navigator={navigator} onForward={onForward} toPage={toPage} imageData={this.state.imageData} captions={this.state.dailyCaptions} {...route.passProps}/>
      }
      if (route.name === 'Signup') {
        return <Signup title={'Signup'} navigator={navigator} onForward={onForward} toPage={toPage} {...route.passProps}/>
      }
      if (route.name === 'Create') {
        return <CreateCaption title={'Create'} navigator={navigator} onForward={onForward} toPage={toPage} imageData={this.state.imageData} {...route.passProps}/>
      }
      if (route.name === 'TopRated') {
        return <LeaderBoard title={'topRated'} navigator={navigator} onForward={onForward} toPage={toPage} imageData={this.state.imageData} captions={this.state.dailyCaptions} {...route.passProps}/>
      }
    }

    // This navigator component now holds all the components of the app. 
    return (
      <Navigator style={{flex: 1}} initialRoute={routeStack[0]} 
       initialRouteStack={this.routeStack} renderScene={renderScene}/>
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

AppRegistry.registerComponent('laughaboutit', () => laughaboutit);
