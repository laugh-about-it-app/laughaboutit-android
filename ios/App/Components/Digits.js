// DIGITS SMS LOGIN RELATED CODE - NOT CURRENTLY USED.

// var Digits = require('react-native-fabric-digits');
// var { DigitsLoginButton, DigitsLogoutButton } = Digits;

/* var styles = { ...}

,
  DigitsAuthenticateButton: {
    height: 50,
    width: 230,
    backgroundColor: '#13988A',
    justifyContent: 'center',
    borderRadius: 5
  },
  DigitsAuthenticateButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold'
  }


  completion(error, response) {
    if (error && error.code !== 1) {
      this.setState({ logged: false, error: true, response: {} });
    } else if (response) {
      var logged = JSON.stringify(response) === '{}' ? false : true;
      this.setState({ logged: logged, error: false, response: response });
    } else {
      alert('Damn son another error on Digits');
    }
  }
  
  var error = this.state.error ? <Text>An error occured.</Text> : null;
    var content = this.state.logged ? 
      (<View>
        <Text>
          Auth Token: {this.state.response.authToken}{'\n'}
          Auth Token Secret: {this.state.response.authTokenSecret}{'\n\n'}
        </Text>
        <DigitsLogoutButton
          completion={this.completion}
          text="Logout"
          buttonStyle={styles.DigitsAuthenticateButton}
          textStyle={styles.DigitsAuthenticateButtonText}/>
      </View>) : (<DigitsLoginButton
        options={{
          title: "Logging in is great",
          phoneNumber: "+1",
          appearance: {
            backgroundColor: {
              hex: "#ffffff",
              alpha: 1.0
            },
            accentColor: {
              hex: "#43a16f",
              alpha: 0.7
            },
            headerFont: {
              name: "Arial",
              size: 16
            },
            labelFont: {
              name: "Helvetica",
              size: 18
            },
            bodyFont: {
              name: "Helvetica",
              size: 16
            }
          }
        }}
        completion={this.completion}
        text="Login (using SMS)"
        buttonStyle={styles.DigitsAuthenticateButton}
        textStyle={styles.DigitsAuthenticateButtonText}/>);

  // in render - return - view -- 
    {error}
    {content}

*/

