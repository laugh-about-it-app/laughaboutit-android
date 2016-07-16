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

class laughaboutit extends Component {

  onBack() {
    route.index > 0 ? navigator.pop() : null;
  }

  render() {
    const routeStack = [{name: 'Intro', index: 0}, {name: 'Home', index: 1}];

    var renderScene = (route, navigator) => {
      var onForward = () => {
        const nextIndex = route.index + 1;
        navigator.push({name: route.name === 'Intro' ? 'Home' : 'Intro', index: nextIndex});
      }

      if (route.name === 'Intro') {
        return <Intro title={'Welcome'} navigator={navigator} onForward={onForward} {...route.passProps}/>
      }
      if (route.name === 'Home') {
        return <Home title={'Home'} navigator={navigator} onForward={onForward} {...route.passProps}/>
      }
    }

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
