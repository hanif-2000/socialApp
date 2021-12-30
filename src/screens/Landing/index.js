import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LandingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 2}}>
        <StatusBar backgroundColor={'#5468ff'} />
        <ImageBackground
          style={styles.image}
          source={require('../../Images/spider.jpg')}>
          <View style={styles.abdamain}>
            <View style={styles.mainText}>
              <Text style={styles.text}>abda</Text>
              <Text style={styles.movietext}>
                Watch your favorite movies or series on only one platform .You
                can watch it anytime and anywhere
              </Text>
              <View style={styles.getstared}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignIn')}
                  style={styles.signin}>
                  <Text style={styles.inputcustom}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  messages: state,
});
const ActionCreators = Object.assign({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);
