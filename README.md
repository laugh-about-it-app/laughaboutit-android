# Laugh About it
Laugh About It is a social captioning app available for both Android and iOS where fellas can swipe to vote on captions as well as contribute their own typed captions. 

### Table of Contents:
  - Setting up Android environment
  - Setting up iOS environment
  - Setting up Heroku environment
  - Communicating with backend endpoints

### Setting up Android Environment

The Android setup process is fun and engaging. Enjoy the ride.

#### GETTING STARTED WITH REACT NATIVE 
You will need Android Studio, node.js, the React Native command line tools, and Watchman.

We recommend installing node and watchman via Homebrew.

`brew install node`
`brew install watchman`
Node comes with npm, which lets you install the React Native command line interface.

`npm install -g react-native-cli`
If you get a permission error, try with sudo: `sudo npm install -g react-native-cli`.

Download and install [Android Studio](https://developer.android.com/studio/install.html)

If you plan to make changes in Java code, we recommend Gradle Daemon which speeds up the build.

#### ADD ANDROID COMMAND TO TERMINAL 

If android command is not found in your terminal, edit your ~/.bash_profile by: 
- `open ~/.bash_profile`
Add this line: export PATH=${PATH}:/Users/$(whoami)/Library/Android/sdk/platform-tools:/Users/$(whoami)/Library/Android/sdk/tools

- Afterwards, $ source ~/.bash_profile to the terminal to reset the terminal to operate from your source.
- Then, test command $ android list targets
- If you get a list of android versions returned, then you are ready for the next step.

#### CREATE EMULATOR

- In your project directory, use command `$ android create avd -n <name> -t <target> --abi default/x86_64`
where <name> is any arbitrary name, and <target> is a name found in your android list targets (ex: "android-23")
- Then you can start your emulator after it has been created by
$ emulator -avd <name>

For an issue where build tools were not found (ex: build tools v23.0.1 not found), go back to your SDK manager by:
`$ cd /Users/$(whoami)/Library/Android/sdk/tools` <-- or wherever you have your sdk folder
`$ open android`
In the SDK manager window that pops up, find the SDK Build Tools version you are missing and install the packages related to it.

#### IN THE APP REPO

Run `npm install` to install all dependencies. 
Use command `$ export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
(or wherever your sdk location is)` in order to connect to your Android sdk.

Then, use `react-native run-android` to initiate the app, and it should load into 
the emulator.


#### TROUBLESHOOTING

Sometimes your sdk.dir gets reset, just type in this command again: $ export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
(or wherever your sdk location is) and rerun the react-native run-android command.

For issues regarding HAXM accelerator missing, go to the sdk location and cd into tools and $ open android. After the SDK manager opens, go to the bottom and find the HAXM accelerator package in extras and install the package. Then go cd from your sdk folder into extras/intel/Hardware_Accelerated_Execution_Manager and run the intelhaxm-android file.



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
