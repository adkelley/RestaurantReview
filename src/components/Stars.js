import React from 'react';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = ({rating}) => {
  const stars = [...Array(Math.ceil(rating))];
  const fullStars = Math.floor(rating);

  return (
    <View style={{flexDirection: 'row'}}>
      {stars.map((_, i) => {
        const name = fullStars > i ? 'star' : 'star-half';
        return <Icon key={i} name={name} color="#FFD64C" />;
      })}
    </View>
  );
};

export default Stars;
