import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReview = ({navigation}) => {
  const close = () => navigation.goBack();

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={close}>
        <Icon name="close" size={30} color="#0066CC" />
      </TouchableOpacity>
      <Text style={styles.addReview}>Add Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
});

export default AddReview;
