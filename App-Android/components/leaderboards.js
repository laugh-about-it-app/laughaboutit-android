import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	Text, 
	Image
} from 'react-native';

/* **************************** HELPER COMPONENT ******************************** */

// Each item in the leaderboard is wrapped in a BoardEntry component:
class BoardEntry extends Component {
	render() {

	}
}

/* **************************** MAIN LEADERBOARD COMPONENT ******************************** */

class LeaderBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			captions: this.props.captions,
			imageData: this.props.imageData
		}
	}

	render() {
		var _scrollView: ScrollView;
		return (
			<View>
				<ScrollView
					ref={(scrollView) => {
						_scrollView = scrollView;
					}}
					onScroll={() => {
						console.log('scrolling detected...');
					}}
					style={styles.scrollView}
				></ScrollView>
			</View>
		);
	}
}

export default LeaderBoard

/* **************************** HELPER DATA AND VARIABLES ******************************** */

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});
