import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	Text, 
	Image
} from 'react-native';

class LeaderBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			captions: this.props.captions,
			imageData: this.props.imageData
		}
	}

	render() {
		
	}
}

export default LeaderBoard