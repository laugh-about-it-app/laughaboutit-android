# master
laugh about it app

Android Setup Process

******************* GETTING STARTED WITH REACT NATIVE **************************
You will need Android Studio, node.js, the React Native command line tools, and Watchman.

We recommend installing node and watchman via Homebrew.

`brew install node`
`brew install watchman`
Node comes with npm, which lets you install the React Native command line interface.

`npm install -g react-native-cli`
If you get a permission error, try with sudo: `sudo npm install -g react-native-cli`.

Download and install <a href="https://developer.android.com/studio/install.html">Android Studio</a>.

If you plan to make changes in Java code, we recommend Gradle Daemon which speeds up the build.

******************* ADD ANDROID COMMAND TO TERMINAL **************************

If android command is not found in your terminal, edit your ~/.bash_profile by: 
- `open ~/.bash_profile`
Add this line: export PATH=${PATH}:/Users/$(whoami)/Library/Android/sdk/platform-tools:/Users/$(whoami)/Library/Android/sdk/tools

- Afterwards, $ source ~/.bash_profile to the terminal to reset the terminal to operate from your source.
- Then, test command $ android list targets
- If you get a list of android versions returned, then you are ready for the next step.

***************************** CREATE EMULATOR *********************************

- In your project directory, use command `$ android create avd -n <name> -t <target> --abi default/x86_64`
where <name> is any arbitrary name, and <target> is a name found in your android list targets (ex: "android-23")
- Then you can start your emulator after it has been created by
$ emulator -avd <name>

For an issue where build tools were not found (ex: build tools v23.0.1 not found), go back to your SDK manager by:
`$ cd /Users/$(whoami)/Library/Android/sdk/tools` <-- or wherever you have your sdk folder
`$ open android`
In the SDK manager window that pops up, find the SDK Build Tools version you are missing and install the packages related to it.

***************************** IN THE APP REPO *********************************

Run `npm install` to install all dependencies. 
Use command `$ export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
(or wherever your sdk location is)` in order to connect to your Android sdk. 

Then, use `react-native run-android` to initiate the app, and it should load into 
the emulator. 


****************************** TROUBLESHOOTING ********************************

Sometimes your sdk.dir gets reset, just type in this command again: $ export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
(or wherever your sdk location is) and rerun the react-native run-android command.

For issues regarding HAXM accelerator missing, go to the sdk location and cd into tools and $ open android. After the SDK manager opens, go to the bottom and find the HAXM accelerator package in extras and install the package. Then go cd from your sdk folder into extras/intel/Hardware_Accelerated_Execution_Manager and run the intelhaxm-android file.
