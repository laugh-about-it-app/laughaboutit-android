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
		// Change font size based on the size of the caption: 
		var captionSize = this.props.caption.length;
		var fontSize = 24 - (this.props.caption.length / 8);
		var fontStyle =  {
		    fontSize: fontSize,
		    textAlign: 'center',
		    backgroundColor: 'rgba(0,0,0,0)',
		    color: 'white',
		    width: 225,
		    alignSelf: 'center'
		}
		return (
			<View style={styles.card}>
				<Image style={styles.picture} source={{uri: this.props.url}}>
				<View style={styles.backDropView}><Text style={fontStyle}>{this.props.caption} / {this.props.caption.length}</Text></View>
				</Image>
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
  {name: '1', url: 'http://4.bp.blogspot.com/-RHgiCuHVKNM/UBFN0nrdMPI/AAAAAAAACKU/uU1xiB6kV74/s1600/Really-Cute-Yellow-Labrador-Puppy.jpg',
  caption: 'Can I has out of this box?'},
  {name: '2', url: 'http://4.bp.blogspot.com/-RHgiCuHVKNM/UBFN0nrdMPI/AAAAAAAACKU/uU1xiB6kV74/s1600/Really-Cute-Yellow-Labrador-Puppy.jpg',
	caption: 'This was only cute for the first few seconds...'},
  {name: '3', url: 'http://4.bp.blogspot.com/-RHgiCuHVKNM/UBFN0nrdMPI/AAAAAAAACKU/uU1xiB6kV74/s1600/Really-Cute-Yellow-Labrador-Puppy.jpg',
	caption: 'Halp pls... halp.... Hooman pls.... haaaaalp.... This is my life now isnt it?'},
  {name: '4', url: 'http://4.bp.blogspot.com/-RHgiCuHVKNM/UBFN0nrdMPI/AAAAAAAACKU/uU1xiB6kV74/s1600/Really-Cute-Yellow-Labrador-Puppy.jpg',
	caption: 'Imma paw my way outta here.'},
  {name: '5', url: 'http://memesvault.com/wp-content/uploads/Doge-Meme-05.png', caption: ''}
];

const Cards2 = [
  {name: '6', url: 'https://s-media-cache-ak0.pinimg.com/736x/b0/02/a7/b002a71dcf90fcd1fc5e8711acecb6da.jpg',
	caption: 'Extra text'},
  {name: '7', url: 'https://i.ytimg.com/vi/LaJLjtPqJ0Q/maxresdefault.jpg',
	caption: 'Continuing to test this text'},
  {name: '8', url: 'http://static8.depositphotos.com/1003131/1021/i/950/depositphotos_10214337-Yellow-lab-puppy-in-the.jpg',
	caption: 'Even more testing of the text'},
  {name: '9', url: 'http://www.ktlabradors.com/Angel/Dec_10_litter/Purple%20collar_lucy%20jane%20home6a.jpg',
	caption: 'Some more testing of my text'}
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
  },
  backDropView: {
    height: 120,
    width: 360,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    width: 225,
    alignSelf: 'center'
  }
})















