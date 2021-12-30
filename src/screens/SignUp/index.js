import React, {Component} from 'react';
import {
  ScrollView,
  Modal,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
import {styles} from './style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {requestForRegister} from '../../store/actions/UserActions';
import Feather from 'react-native-vector-icons/Feather';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      secureTextEntry: true,
    };
  }

  textInputChange = val => {
    this.setState({
      name: val,
    });
  };

  handlePasswordChange = val => {
    this.setState({
      password: val,
    });
  };

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };
  submit = () => {
    if (this.state.email > 0 && this.state.password > 0) {
      let {actions} = this.props;
      actions.requestForRegister();
      this.props.navigation.navigate('Hello');
    } else {
      alert('fill valip inputs');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#5468ff" />
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.textcolor}>Create new account</Text>
            <Text style={styles.sectext}>
              Please fill in the form to continue
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.TextInputContainer}>
              <TextInput
                style={styles.inputCustom}
                placeholder="Full Name"
                keyboardType="default"
                returnKeyType="next"
                placeholderTextColor={'#595b62ed'}
                onChangeText={val => this.textInputChange(val)}
              />
            </View>
            <View style={[styles.TextInputContainer, {marginTop: 10}]}>
              <TextInput
                style={styles.inputCustom}
                placeholder="Email Address "
                keyboardType="email-address"
                returnKeyType="next"
                placeholderTextColor={'#595b62ed'}
                onChangeText={val => this.setState({email: val})}
              />
            </View>
            <View style={[styles.TextInputContainer, {marginTop: 10}]}>
              <TextInput
                style={styles.inputCustom}
                placeholder="Phone Number"
                keyboardType="numeric"
                returnKeyType="next"
                maxLength={12}
                returnKeyType="done"
                placeholderTextColor={'#595b62ed'}
                onChangeText={val => this.setState({phone: val})}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputCustom}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                placeholder="Password"
                keyboardType="numeric"
                maxLength={18}
                returnKeyType="done"
                onChangeText={val => this.handlePasswordChange(val)}
                placeholderTextColor={'#595b62ed'}
              />
              <TouchableOpacity onPress={this.updateSecureTextEntry}>
                <View style={{padding: 10}}>
                  {this.state.secureTextEntry ? (
                    <Feather name="eye-off" color="grey" size={20} />
                  ) : (
                    <Feather name="eye" color="grey" size={20} />
                  )}
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.submit();
              }}>
              <Text style={[styles.inputCustom, {textAlign: 'center'}]}>
                Sign Up
              </Text>
            </TouchableOpacity>

            <View style={styles.DontAccount}>
              <Text style={styles.accounttext}> Have on Account ?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={[styles.accounttext, {color: '#5468ff'}]}>
                  Sign In
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
  userInfo: state.user.userInfo,
});
const ActionCreators = Object.assign({requestForRegister});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
