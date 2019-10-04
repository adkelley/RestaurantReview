/**
 * Restaurant Review
 * https://egghead.io/courses/build-a-react-native-application-for-ios-and-android-from-start-to-finish
 * Using React Hooks, instead of Class Components
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';

/* This seems to be the only way to ensure that the navigation header
 * doesn't appear on the home screen upon launching the app
 */
RestaurantList.navigationOptions = {header: null};

const AppNavigator = createStackNavigator(
  {
    Home: {screen: RestaurantList},
    Info: {screen: RestaurantInfo},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0066CC',
        color: '#FFF',
      },
      headerTintColor: '#FFF',
      headerTintStyle: {
        color: '#FFF',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
