import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from '../screens/Landing';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Hello from '../screens/Welcome';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hello"
        component={Hello}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
