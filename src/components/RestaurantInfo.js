import React from 'react';

import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

import Stars from 'components/Stars';

const RestaurantInfo = ({navigation}) => {
  RestaurantInfo.navigationOptions = {
    title: 'Restaurant Info',
  };

  const place = navigation.getParam('place', null);

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
});

export default RestaurantInfo;
