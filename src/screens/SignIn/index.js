import React, {Component} from 'react';
import {
  ScrollView,
  Modal,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Feather from 'react-native-vector-icons/Feather';
import {requestForGuestUsers} from '../../store//actions/homeActions';
import {requestforGoogleSignIn} from '../../store//actions/UserActions';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      googleInfo: {},
    };
  }
  async componentDidMount() {
    GoogleSignin.configure();

    let {actions} = this.props;
    actions.requestForGuestUsers();
  }

  updateSecureTextEntry = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry});
  };

  textInputChange = val => {
    this.setState({
      email: val,
    });
  };
  passwordHandler = val => {
    this.setState({password: val});
  };

  signInHandler = () => {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.userHandler();
    } else {
      alert('Fill input!');
    }
    this.setState({email: '', password: ''});
  };
  userHandler = () => {
    let {users} = this.props;
    let temp = users.data.map(user => user.email === this.state.email);
    if (temp == true) {
      this.props.navigation.navigate('Hello');
    } else {
      alert('Please Enter valid email');
    }
  };

  googleSignIn = async () => {
    let {actions} = this.props;
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({googleInfo: userInfo});
      actions.requestforGoogleSignIn(userInfo);
      this.props.navigation.navigate('Hello');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.warn('error : ', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('error : ', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('error : ', error);
        // play services not available or outdated
      } else {
        console.warn('error : ', error);
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5468ff" />
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.textcolor}>Welcome Back!</Text>
            <Text style={styles.sectext}>Please sign to your account</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.textinput}>
              <TextInput
                style={styles.inputcustom}
                onChangeText={val => this.textInputChange(val)}
                placeholder="email address"
                keyboardType="email-address"
                returnKeyType="next"
                placeholderTextColor={'#595b62ed'}
              />
            </View>

            <View style={styles.textinputsec}>
              <TextInput
                style={styles.inputcustom}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                placeholder="Password"
                maxLength={18}
                returnKeyType="done"
                placeholderTextColor={'#595b62ed'}
                onChangeText={val => this.passwordHandler(val)}
              />
              <TouchableOpacity
                onPress={() => this.updateSecureTextEntry()}
                style={{padding: 10}}>
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.forgot}
              onPress={() => alert('in-progress')}>
              <Text style={styles.sectext}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signin}
              onPress={() => this.signInHandler()}>
              <Text style={[styles.inputcustom, {textAlign: 'center'}]}>
                Sign In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.googleSignIn().then(() =>
                  console.log('Signed in with Google!'),
                )
              }
              style={[
                styles.signin,
                {
                  backgroundColor: '#fff',
                  paddingVertical: 15,
                  marginTop: 10,
                },
              ]}>
              <View style={styles.maingoogle}>
                <Image
                  style={styles.google}
                  source={require('../../Images/google.png')}
                />
                <Text style={styles.textgoogle}>Sign in With Google</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.DontAccount}>
              <Text style={styles.accounttext}>Don't have on Account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={[styles.accounttext, {color: '#5468ff'}]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  users: state.home.users,
});
const ActionCreators = Object.assign(
  {requestForGuestUsers},
  {requestforGoogleSignIn},
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
