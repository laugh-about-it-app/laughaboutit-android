export let api = {
  getUserInfo (user) {
    console.log(user);
    //takes in info from user 'form' / Authentication
    //arranges it accord. w Sequelize schema
    //Sequelize query for all db info on THAT user
    //return THAT user object 
                   //or err
  },
  getDailyCaptions () {
    //takes in no arguments
    // uses Sequelize to find all captions in db
    // (text-top, text-bottom, photo_id, upvotes, downvotes)
    //returns an array of caption-objects
                         //or err
  },
  postCaption (caption, user, photo) {
    console.log(caption);
    //takes in a caption text & ref to user & ref to photo
    //formats it into Postgress Caption Schema
    //NEEDS: likes, dislikes, caption_top, caption_bottom, ref. to userID, ref to photoID
    //use Sequelize to insert new,additional caption into db
    //ALSO adds to that PHOTO
    //ALSO adds to that USER
    //returns success mssg 
                   //or err
  },
    // function to get images from DB to propose to user for caption
  showImageOptions () {
    //uses Sequelize to retrieve (all) photos
    //                         --OR top rateed ? 
    //                         --OR top 5 rated?
    //return in an obj
    //I don't understand what this function wants returned
  },
  updateUserInfo (user) {
    /*THIS ONE SEEMS LIKE AN EXTENSION TO ME*/
        console.log(user);
    // function to update user info from a settings page ( or elsewhere? )
  },
  upVote (caption) {
    console.log(caption);
    //takes in a caption-object (React-obj)
    //uses Sequelize to 
      //1) locate THAT object
      //2) add One to the likes
  }, 
  downVote (caption) {
    console.log(caption);
  }
  // other functions.
};
