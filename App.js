import React, {Component} from 'react';
import AppNavigator from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import { NavigationContainer } from '@react-navigation/native';



const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      internetConnection: true,
      show: false,
    };
  }
  // async componentDidMount() {
  //   GoogleSignin.configure();
  // }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
