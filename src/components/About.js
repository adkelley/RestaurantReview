import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const About = () => {
  return (
    <View style={{flex: 1, padding: 40}}>
      <Text style={styles.header}>About Page</Text>

      <Icon name="utensils" color="#0066CC" size={100} style={styles.icon} />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginTop: 20,
  },
});
