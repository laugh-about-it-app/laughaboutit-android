import React, { Component } from 'react';
import { StyleSheet, 
	Text, 
	View, 
	Image } from 'react-native';

// This component is used to provide the swipe functionality. 
import SwipeCards from '../util/SwipeCards.js';

// The card component houses each card and will be dynamically rendered upon each
// new swipe to a new card. 
class Card extends Component {
	render() {
		console.log('THIS PROPS FOR CARDS ****** ', this.props);
		return (
			<View style={styles.card}>
				<Image style={styles.picture} source={{uri: this.props.url}}></Image>
				<Text style={styles.text}>{this.props.name}</Text>
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
  {name: '1', url: 'http://4.bp.blogspot.com/-RHgiCuHVKNM/UBFN0nrdMPI/AAAAAAAACKU/uU1xiB6kV74/s1600/Really-Cute-Yellow-Labrador-Puppy.jpg'},
  {name: '2', url: 'http://memesvault.com/wp-content/uploads/Doge-Meme-05.png'},
  {name: '3', url: 'https://i.imgflip.com/md3m6.jpg'},
  {name: '4', url: 'http://legendsoflocalization.com/wp-content/uploads/2015/10/doge-2.jpg'},
  {name: '5', url: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'}
];

const Cards2 = [
  {name: '6', url: 'https://s-media-cache-ak0.pinimg.com/736x/b0/02/a7/b002a71dcf90fcd1fc5e8711acecb6da.jpg'},
  {name: '7', url: 'https://i.ytimg.com/vi/LaJLjtPqJ0Q/maxresdefault.jpg'},
  {name: '8', url: 'http://static8.depositphotos.com/1003131/1021/i/950/depositphotos_10214337-Yellow-lab-puppy-in-the.jpg'},
  {name: '9', url: 'http://www.ktlabradors.com/Angel/Dec_10_litter/Purple%20collar_lucy%20jane%20home6a.jpg'}
];

// Main class to hold the cards. 
class Swiper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: Cards,
			outOfCards: false
		}
	}

	// TODO: his should eventually store the fact that the user upvoted a picture/caption to
	// the database.
	handleUpvote(card) {
		console.log('Card is upvoted');
	}

	// Handle Nope should remain relatively without effect as a downvote system is not necessary
	handleNope(card) {
		console.log('Card was skipped');
	}

	// This function is called everytime a card is removed and can possibly act as a trigger for
	// an additional server call in order to render more information, or can just be relatively
	// without visible effect. 
	cardRemoved(index) {
		console.log(`Index: ${index}`);
		let CARD_REFRESH_LIMIT = 3;
		if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
			console.log(`Remaining cards: ${this.state.cards.length - index - 1}`);
			// At this point, we may or may not want to do another call to the database
			// for possible new items. 
			if (!this.state.outOfCards) {
				this.setState({
					// Cards2 is a placeholder for now but should be a new set of data 
					// retrieved from the database
					cards: this.state.cards.concat(Cards2),
					// If going to do another call to the database, out of cards should
					// only be set to true if the call fails to produce new data. 
					outOfCards: true
				});
			}
		}
	}

	render() {
		return (
			<SwipeCards
			  cards={this.state.cards}
			  loop={false}

			  renderCard={(cardData) => <Card {...cardData} />}
			  renderNoMOreCards={() => <NoMoreCards />}
			  showYup={true}
			  showNope={true}

			  handleYup={this.handleUpvote}
			  handleNope={this.handleNope}
			  cardRemoved={this.cardRemoved.bind(this)}
			/>
		);
	}

}

export default Swiper

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  picture: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})















