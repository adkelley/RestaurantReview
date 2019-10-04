import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Stars from 'components/Stars';

const RestaurantInfo = ({navigation}) => {
  RestaurantInfo.navigationOptions = {
    title: 'Restaurant Info',
  };

  const place = navigation.getParam('place', null);

  const addReview = () => {
    navigation.navigate('AddReview');
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{
            uri: `http://localhost:3000/images/${place.image}`,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.address}>{place.address}</Text>
          <Stars rating={place.rating} />
          <TouchableOpacity style={styles.button} onPress={addReview}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  address: {
    color: 'grey',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default RestaurantInfo;
