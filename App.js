/**
 * Restaurant Review
 * https://egghead.io/courses/build-a-react-native-application-for-ios-and-android-from-start-to-finish
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

const AppNavigator = createStackNavigator({
  Home: {screen: RestaurantList},
  Info: {screen: RestaurantInfo},
});

export default createAppContainer(AppNavigator);
