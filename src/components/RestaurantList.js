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

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import PizzaImage from 'images/pizza.png';

const RestaurantList = () => {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/restaurants').then(result =>
      setRestaurants(result.data),
    );
  });

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 40,
          alignItems: 'center',
        }}>
        <Image source={PizzaImage} />
      </View>
      <View>
        <Header />

        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => setSearch(text)}
        />

        <FlatList
          data={restaurants.filter(place => {
            return (
              !search ||
              place.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            );
          })}
          renderItem={({item, index}) => (
            <RestaurantRow place={item} index={index} />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

export default RestaurantList;
