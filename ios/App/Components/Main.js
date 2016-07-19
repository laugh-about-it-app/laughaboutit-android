import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native'
import $ from "jquery";
import api from './../Utils/api';
import Icon from 'react-native-vector-icons/FontAwesome';
const leftArrow = (<Icon name="arrow-left" size={30} color="#900" />);
const rightArrow = (<Icon name="arrow-right" size={30} color="#900" />);

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  AccessToken
} = FBSDK;

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
                    console.log(data);
                    var userId = data.userID;
                      
                   const infoRequest = new GraphRequest(
                    `/${userId}?fields=id,name,email,picture`,
                    null,
                    (err, res) => { err ? console.log(err) : console.log(res); },
                    );  
                     // TODO: in the callback here - instead of console.log(res) we'd send it to the DB
                     // and pass it down via (props) so we keep reference to it.
                    
                  new GraphRequestManager().addRequest(infoRequest).start();
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

  render() {
    
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
  
      </View>
    )
  }
}

export default Main;