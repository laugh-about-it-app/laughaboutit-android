# Laugh About it
Laugh About It is a social captioning app available for both Android and iOS where fellas can swipe to vote on captions as well as contribute their own typed captions. 

### Table of Contents:
  - Setting up Android environment
  - Setting up iOS environment
  - Setting up Heroku environment
  - Communicating with backend endpoints

### Setting up Android Environment

### Setting up Heroku Environment
- Download [Heroku Toolbelt](https://toolbelt.heroku.com/)
- Download [Postico](https://eggerapps.at/postico/), a PostgreSQL GUI
- Get familiar with [deploying on Heroku](https://devcenter.heroku.com/articles/git)
- Note: We deploy our server / landing page separate from the ReactNative code.
- Within our server code, add shielded-springs-75726 (or whatever app you are designating as your staging environment) as a git remote repository. Whenever you make changes, add and commit them, then push to the remote. 
- To view your Postgres db in Postico, read [Heroku's guide to connecting their Heroku Postgres Databases outside of Heroku](https://devcenter.heroku.com/articles/connecting-to-heroku-postgres-databases-from-outside-of-heroku)
- Set up Heroku [Postgres DB](https://postgres.heroku.com/). Retrieve the db url from ConnectionSettings to sync the db with your code and connection. Retrieve all db info to connect your db/ heroku db with your Postico schema.

### Backend
Client can communicate with the endpoints listed below for information on users, captions, photos, and hashtags.

##### For Users:
- /users/create
  - POST  
    - Please include these fields on your post request :
        - first_name
        - last_name
        - email
        - captionId (see below for how you can get captionId)
        - fb_username
        - fb_access
        - photo
- /users/info
    - GET
        - Takes id, returns user object with info. 


##### For captions: 

- /captions
  - GET
    - Returns all captions
- /captions/giveusthisday
  - GET
    - Returns photo of the day *kronjob needed
  - POST
    - Please include these in your POST req:
      - userId
      - caption_top //optional
      - caption_bottom //optional
      - font //this is optional
- /captions/upvote
  - PUT
    - Include captionId in your PUT request
      - AS: stringified {captionId: captionId}
    - Will return updated upvotes
- /captions/downvote
  - PUT
    - Include captionId in your PUT request
      - AS: stringified {captionId: captionId}
    - Will return updated downvotes
- /captions/getvotes
  - GET
    - Need captionId in query
      - AS: stringified {captionId: captionId}
    - Will return likes, dislikes, and total votes in an object


##### Photo endpoints:

- /photos/giveusthisday
    - POST
        - Returns daily photo *kron job needed
    - GET
        - Returns daily photo
- /photos
    - GET
        - Returns ALL photos, doesn’t need any parameters
    - POST
        - Include these with your POST req:
            - user_Id
            - url
            - source
            - hashtagId
            - data //any metadata you might want to hold

##### Hashtag endpoints: **non MVP, haven’t completed

- /hashtags
    - GET
        - Returns all hashtags

- /hashtags/giveusthisday
    - GET
        - Returns all hashtags for photo of the day
    - POST
        - Creates new hashtag in db
        - Include:
            - photoId
            - text
