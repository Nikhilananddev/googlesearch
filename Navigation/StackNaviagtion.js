import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Result from '../Screens/Result';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
export class StackNaviagtion extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNaviagtion;
