var schemas = require('../../server/schemas.js');
export const api = {
  getUserInfo (user) {

  },
  getDailyCaptions (photo) {
    // function to get all images/captions for the day
    // includes: caption text, image URL, vote count, user who posted ?
  },
  postCaption (caption) {
    // function to post a user-created caption
  },
  showImageOptions (res) {
    schemas.Photo.findAll({}, function (results) {
      res.send(results);
    });
  },
  updateUserInfo (user) {
    // function to update user info from a settings page ( or elsewhere? )
  },
  upVote (caption) {
    // function to upvote a particular caption

  }, 
  downVote (caption) {

  }
  // other functions.
};
