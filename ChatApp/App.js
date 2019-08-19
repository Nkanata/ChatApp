/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React  from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './screens/loginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ChatDetails from './chats/ChatDetails';
import CreateChat from './chats/CreateChat';

const AppStack = createStackNavigator({ Home: HomeScreen, Chat: ChatDetails, Create: CreateChat });
const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
));





