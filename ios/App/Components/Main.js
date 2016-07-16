import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native'
import api from './../Utils/api';
import Icon from 'react-native-vector-icons/FontAwesome';
const leftArrow = (<Icon name="arrow-left" size={30} color="#900" />)
const rightArrow = (<Icon name="arrow-right" size={30} color="#900" />)

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;

var Digits = require('react-native-fabric-digits');
var { DigitsLoginButton, DigitsLogoutButton } = Digits;

var Login = React.createClass({
  // LoginButton.readPermissions = ["public_profile", "email", "user_friends"];
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                // result.error = null for some reason.
                // it does have an error. [Object object]
                ("login has error: ", error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  icon: {
    alignItems: 'stretch' // how to get the icon to the right of the image ? 
  },
  image: {
    width: 300,
    height: 200
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  DigitsAuthenticateButton: {
    height: 50,
    width: 230,
    backgroundColor: '#13988A',
    justifyContent: 'center',
    borderRadius: 5
  },
  DigitsAuthenticateButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

class Main extends Component {
  constructor(props) { // which props, from where?
    super(props)
    this.state = {
      imageId: 0,
      images: ['https://s3-us-west-1.amazonaws.com/labitapp/dog1.jpeg', 'https://s3-us-west-1.amazonaws.com/labitapp/dog2.jpeg', 'https://s3-us-west-1.amazonaws.com/labitapp/dog3.jpeg'],
      imageText: ['Laugh About It!', 'Every day we share an image and invite the community to make captions', 'Vote on LABs by swiping left/right - and submit your own!'],
      logged: false, 
      error: false,
      response: {}
    } // NOTE: this way we don't need 3 separate pages for images.
  } // we can just swap in/out the images and text.
    // which do we prefer? could use testing. Login button is the same on each.
  
  customHandleLogin() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }
  
  nextImage(imageId) {
    if (this.state.imageId < 2) {
      this.setState({imageId: this.state.imageId + 1});
    }
  }
  
  prevImage(imageId) {
    if (this.state.imageId > 0) {
      this.setState({imageId: this.state.imageId - 1});
    }
  }

  completion(error, response) {
    if (error && error.code !== 1) {
      this.setState({ logged: false, error: true, response: {} });
    } else if (response) {
      var logged = JSON.stringify(response) === '{}' ? false : true;
      this.setState({ logged: logged, error: false, response: response });
    } else {
      alert('Damn son another error on Digits');
    }
  }

  render() {
    
    var error = this.state.error ? <Text>An error occured.</Text> : null;
    var content = this.state.logged ? 
      (<View>
        <Text>
          Auth Token: {this.state.response.authToken}{'\n'}
          Auth Token Secret: {this.state.response.authTokenSecret}{'\n\n'}
        </Text>
        <DigitsLogoutButton
          completion={this.completion}
          text="Logout"
          buttonStyle={styles.DigitsAuthenticateButton}
          textStyle={styles.DigitsAuthenticateButtonText}/>
      </View>) : (<DigitsLoginButton
        options={{
          title: "Logging in is great",
          phoneNumber: "+1",
          appearance: {
            backgroundColor: {
              hex: "#ffffff",
              alpha: 1.0
            },
            accentColor: {
              hex: "#43a16f",
              alpha: 0.7
            },
            headerFont: {
              name: "Arial",
              size: 16
            },
            labelFont: {
              name: "Helvetica",
              size: 18
            },
            bodyFont: {
              name: "Helvetica",
              size: 16
            }
          }
        }}
        completion={this.completion}
        text="Login (using SMS)"
        buttonStyle={styles.DigitsAuthenticateButton}
        textStyle={styles.DigitsAuthenticateButtonText}/>);
    
    return (
      <View style={styles.container}>

        <Image style={styles.image} 
               source={{uri: this.state.images[this.state.imageId]}} />
        <Text style={styles.welcome}> { this.state.imageText[this.state.imageId] } </Text>
        
        <TouchableHighlight onPress={this.prevImage.bind(this)}>
            <Text style={styles.icon}> {leftArrow} </Text>
        </TouchableHighlight>  
        <TouchableHighlight onPress={this.nextImage.bind(this)}>
            <Text style={styles.icon}> {rightArrow} </Text>
        </TouchableHighlight>

        <Login></Login>
        
        {error}
        {content}
        
        <TouchableHighlight style={styles.container} onPress={this.customHandleLogin.bind(this)}>
          <Text>click to log in</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Main;