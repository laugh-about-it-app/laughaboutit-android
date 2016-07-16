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

// Main purpose of this class is to act as a router/navigator for the app. 
class laughaboutit extends Component {

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

      var toPage = (pageName) => {
        const nextIndex = route.index + 1;
        navigator.push({name: pageName, index: nextIndex});
      }

      /* **************************** MAIN BODY OF THE ROUTER ******************************** */

      if (route.name === 'Intro') {
        return <Intro title={'Welcome'} navigator={navigator} onForward={onForward} toPage={toPage} {...route.passProps}/>
      }
      if (route.name === 'Home') {
        return <Home title={'Home'} navigator={navigator} onForward={onForward} toPage={toPage} {...route.passProps}/>
      }

      if (route.name === 'Signup') {
        // Placeholder to insert signup. 
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
