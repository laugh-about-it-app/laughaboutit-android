import React, { Component, } from 'react';
import { View, StyleSheet, Navigator, Text, Image, TextInput, TouchableHighlight} from 'react-native';
import api from './../util/api'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', // 'space-around' is nicer? but then textinputs are too low.
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    paddingTop: 10, // change?
    width: 300,
    height: 200
  },
  textInput: {
    height: 45, 
    borderColor: 'gray', 
    borderWidth: 2,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20
  },
  topAlign: {
    position: 'absolute',
    top: 10,
  },
  bottomAlign: {
    position: 'absolute',
    bottom: 10,
  },
  buttonText: {
    fontSize: 20 
  },
  button: {
    marginBottom: 7,
    backgroundColor: 'white',
    borderColor: 'blue', 
    borderWidth: 1
  }
});

class CreateCaption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topCaption: 'Text Here',
      bottomCaption: 'Text Here',
      fontFamilyOptions: ['Karla', 'Karla-Italic', 'Karla-BoldItalic', 'Karla-Bold'],
      optionIndex: 0,
      bottomCaptionKey: 0,
      topCaptionKey: 0,
      imageData: this.props.imageData
    }
  }
  
  handleSubmit() {
    var caption = {
      userId: 17,
      photoId: 1,
      caption_top: this.state.topCaption,
      caption_bottom: this.state.bottomCaption
    };
    api.postCaption(caption);
    this.props.toPage('Home');
  }

  getPicture() {
    console.log('****** STARTING GET DAILY RAW IMAGE ******* ');
    api.getDailyRawImage((data) => {
      console.log('******* THIS IS THE DATA CALLBACK********', JSON.parse(data._bodyText));
      this.setState({imageData: JSON.parse(data._bodyText)});
    });
  }
  
  handleFontChange() {
    if (this.state.optionIndex < this.state.fontFamilyOptions.length-1) {
      this.setState({optionIndex: this.state.optionIndex + 1});
    } else {
      this.setState({optionIndex: 0});
    }
    this.setState({bottomCaptionKey: this.state.bottomCaptionKey + 1});
    this.setState({topCaptionKey: this.state.topCaptionKey + 1});
  }
  
  fontStyle(captionType) {
    return {
      fontSize: 20,
      width: 300,
      height: 25,
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      color: 'white',
      fontFamily: this.state.fontFamilyOptions[this.state.optionIndex]
    };
  }
  
  // this will be a dynamic image - based on the daily image 
  // <Image style={styles.image} source={{ uri: {dailyImage} }}/>
  // currently returning an error from endpoint.
  
  render() {
    
    return (
      <View style={styles.container}>
        
        <Image style={styles.image} source={{uri: this.state.imageData.url}}> 
          <View style={styles.topAlign}>
           <Text key={this.state.topCaptionKey} style={this.fontStyle()}>{this.state.topCaption}</Text>
          </View>
          <View style={styles.bottomAlign}>
            <Text key={this.state.bottomCaptionKey} style={this.fontStyle()}>{this.state.bottomCaption}</Text>
          </View>
        </Image>
        
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({topCaption: text})}
          value={this.state.topCaption} maxLength={40} />
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({bottomCaption: text})}
          value={this.state.bottomCaption} maxLength={40} />
        
        <Text style={styles.textInput}>Current Font: {this.state.fontFamilyOptions[this.state.optionIndex]}</Text>
        <TouchableHighlight style={styles.button} onPress={this.handleFontChange.bind(this)}>
          <Text style={styles.buttonText}>Change Font</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonText}>Submit Caption</Text>
        </TouchableHighlight>
        
      </View>
    )
  }
}

export default CreateCaption