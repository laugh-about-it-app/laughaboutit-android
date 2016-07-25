let api = {
  
  /* format for post:
    userSignUp: {
      first_name :: string 
	  last_name :: string
      photo :: string
      email :: string
      fb_username :: string
      fb_access :: string 
    }
    
  */
  downVote (captionId) {
    // function to upvote a particular caption
    fetch('https://shielded-springs-75726.herokuapp.com/captions/downvote', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({captionId: captionId})
    });
  },
  
  // function to get all images/captions for the day
  getDailyCaptions (callback) {
    fetch('https://shielded-springs-75726.herokuapp.com/captions/giveusthisday').then( (data) => {
      console.log('success getDailyCaptions', data);
      callback ? callback(JSON.parse(data._bodyText)) : null;
    }).catch((err) => {
      console.log('error');
    });
  },
  // function to post a user-created caption
  postCaption (caption) {
    fetch('https://shielded-springs-75726.herokuapp.com/captions', { 
      method: 'POST',
      body: JSON.stringify(caption) // review.
    }).then( (data) => { 
      console.log('success postCaption', data); 
    }).catch( (err) => { 
      console.log('error on postCaption', err); 
    });
  },
  // user submits an image to the DB, for later use in daily captions etc.
  postImage (image) {
    fetch('https://shielded-springs-75726.herokuapp.com/captions', { 
      method: 'POST',
      body: JSON.stringify(image)
    }).then( (data) => { 
      console.log('success postImage', data); 
    }).catch( (err) => { 
      console.log('error on postImage', err); 
    });
  },
  // get images from DB to propose to user for captions (to friends etc.)
  showImageOptions () {
    fetch('https://shielded-springs-75726.herokuapp.com/photos').then( (data) => {
      console.log('success showImageOptions', data);
      // do something with the data, display etc.
    });
  },
  // get the image of the day, in raw format, for caption submission
  getDailyRawImage (callback) {
    console.log('before fetch works ********');
    fetch('https://shielded-springs-75726.herokuapp.com/photos/giveusthisday').then( (data) => {
      console.log('success getDailyRawImage', data);
      callback(data);
    });
  },

  updateUserInfo (user) {
    // function to update user info from a settings page ( or elsewhere? )
  },
  upVote (captionId) {
    // function to upvote a particular caption
    fetch('https://shielded-springs-75726.herokuapp.com/captions/upvote', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({captionId: captionId})
    });
  },
  // register user in our DB, used for later updating of user records.
  userSignUp (user) {
    fetch('https://shielded-springs-75726.herokuapp.com/users/create', {
      method: 'POST',
      body: JSON.stringify(user)
    }).then( (data) => {
      console.log('success userSignUp', data);
    }).catch( (err) => {
      console.log('error userSignUp', err);
    });
  }
  // other functions.
};

export default api;