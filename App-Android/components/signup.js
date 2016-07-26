import React, { Component } from 'react';
import { Image,
       Text,
       View,
       AppRegistry,
       StyleSheet,
       TouchableHighlight,
       TextInput
       } from 'react-native';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  
  render() {

    return (
      <View style={style.container}>
      <Text style={style.header}>
        Login or Sign Up!
      </Text>
      <TextInput style={style.textBox} placeholder="Username"
        onChangeText={(text) => this.setState({username: text})}/>
      <Text style={style.body}> {this.state.username} </Text>
      <View style={style.buttonsContainer}>
        <TouchableHighlight onPress={() => {
          this.props.toPage('Home');
        }}>
          <Text> Login! </Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={() => {
          this.props.toPage('Home');
        }}>
          <Text> Signup! </Text>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eedd82'
  },
  image: {
    alignSelf: 'center',
    width: 400,
    height: 300
  },
  header: {
    fontSize: 20,
    textAlign: 'center'
  },
  body: {
    fontSize: 10
  },
  textBox: {
    height: 40,
    width: 300
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Signup

AppRegistry.registerComponent('Signup', () => Signup);