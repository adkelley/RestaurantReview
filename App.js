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
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';
import About from 'components/About';

/* This seems to be the only way to ensure that the navigation header
 * doesn't appear on the home screen upon launching the app
 */
RestaurantList.navigationOptions = {header: null};

const List = createStackNavigator(
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

const Tabs = createBottomTabNavigator(
  {
    List: {screen: List},
    About: {screen: About},
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        tabBarIcon: ({tintColor}) => {
          const route = navigation.state.routeName;
          const name = {
            List: 'list',
            About: 'info-circle',
          }[route];
          return <Icon name={name} color={tintColor} size={22} />;
        },
        tabBarOptions: {
          activeBackgroundColor: '#E6F0FA',
        },
      };
    },
  },
);

export default createAppContainer(Tabs);
