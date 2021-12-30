import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {requestforGoogleSignIn} from '../../store/actions/UserActions';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTextChange = text => {
    this.setState({chat: text});
  };

  async componentDidMount() {}

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      let {actions} = this.props;
      actions.requestforGoogleSignIn(null);
      this.props.navigation.navigate('Landing');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    let {googleUserInfo} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.helloTxt}>
            Hello {googleUserInfo?.user.name ? googleUserInfo?.user.name : null}
          </Text>
          {googleUserInfo?.user?.photo ? (
            <Image
              style={styles.image}
              source={{uri: googleUserInfo.user.photo}}
            />
          ) : (
            <Image
              style={styles.image}
              source={require('../../Images/spider.jpg')}
            />
          )}
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.signin}
            onPress={() => this.signOut()}>
            <Text style={[styles.inputcustom, {textAlign: 'center'}]}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  googleUserInfo: state.user.googleUserInfo,
});
const ActionCreators = Object.assign({requestforGoogleSignIn});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
