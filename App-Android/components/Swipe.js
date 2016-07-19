import React, { Component } from 'react';
import { StyleSheet, 
	Text, 
	View, 
	Image } from 'react-native';

// This component is used to provide the swipe functionality. 
import SwipeCards from 'react-native-swipe-cards';

// The card component houses each card and will be dynamically rendered upon each
// new swipe to a new card. 
class Card extends Component {
	render() {
		return (
			<View style={styles.card}>
				<Image style={styles.picture} source={{uri: this.props.url}}></Image>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		)
	}
}

// Will render when no cards remain. This should probably be used to encourage the 
// user to make their own captions. 
class NoMoreCards extends Component {
	render() {
		return (
			<View style={styles.noMoreCards}>
				<Text>Placeholder Text</Text>
			</View>
		)
	}
}

// Placeholder for cards. To be gotten from the database instead. 
const Cards = [
  {name: '1', image: 'http://4.bp.blogspot.com/-RHgiCuHVKNM/UBFN0nrdMPI/AAAAAAAACKU/uU1xiB6kV74/s1600/Really-Cute-Yellow-Labrador-Puppy.jpg'},
  {name: '2', image: 'http://memesvault.com/wp-content/uploads/Doge-Meme-05.png'},
  {name: '3', image: 'https://i.imgflip.com/md3m6.jpg'},
  {name: '4', image: 'http://legendsoflocalization.com/wp-content/uploads/2015/10/doge-2.jpg'},
  {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'}
];

// Main class to hold the cards. 
class Swiper extends Component {
	constructro(props) {
		super(props);
		this.state = {
			cards: Cards,
			outOfCards: false
		}
	}

	// This should try to store t
	handleUpvote(card) {
		console.log('Card is upvoted');
	}
}

export default Swiper

















