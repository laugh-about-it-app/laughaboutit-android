import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Image,
} from 'react-native'
import Main from './ios/App/Components/Main';

 class test2 extends Component {
  
   renderScene(route, navigator) {
    
    if(route.name === 'Main') {
      return <Main title={'Main'} navigator={navigator} {...route.passProps}/>
    }
   // other routes.
   }
   
   render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{name: 'Main'}}
        renderScene={ this.renderScene } 
      />       
    );
  }
};


 AppRegistry.registerComponent('test2', () => test2);
