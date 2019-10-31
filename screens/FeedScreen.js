import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { MonoText } from '../components/StyledText';

import FeedItem from '../components/FeedItem';

export default function FeedScreen() {
  const [restaurants, setRestaurants] = useState([
    {
      image: {
        uri:
          'https://www.tasteofhome.com/wp-content/uploads/2018/05/Baja-Pork-Tacos_EXPS_SDAM18_43842_D12_05_1b.jpg'
      },
      name: 'Mis Taquitos',
      rating: '5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'http://newyorkstreetfood.com/wp-content/uploads/2010/06/indian-street-food.jpg'
      },
      name: 'Streets of India',
      rating: '4.5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.bing.com/th?id=OIP.1d8WnYQsi_8d6EIEKl_XPgHaEK&pid=Api&rs=1'
      },
      name: 'Los Ches',
      rating: '4.4',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.tasteofhome.com/wp-content/uploads/2018/05/Baja-Pork-Tacos_EXPS_SDAM18_43842_D12_05_1b.jpg'
      },
      name: 'Mis Taquitos',
      rating: '5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'http://newyorkstreetfood.com/wp-content/uploads/2010/06/indian-street-food.jpg'
      },
      name: 'Streets of India',
      rating: '4.5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.bing.com/th?id=OIP.1d8WnYQsi_8d6EIEKl_XPgHaEK&pid=Api&rs=1'
      },
      name: 'Los Ches',
      rating: '4.4',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.tasteofhome.com/wp-content/uploads/2018/05/Baja-Pork-Tacos_EXPS_SDAM18_43842_D12_05_1b.jpg'
      },
      name: 'Mis Taquitos',
      rating: '5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'http://newyorkstreetfood.com/wp-content/uploads/2010/06/indian-street-food.jpg'
      },
      name: 'Streets of India',
      rating: '4.5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.bing.com/th?id=OIP.1d8WnYQsi_8d6EIEKl_XPgHaEK&pid=Api&rs=1'
      },
      name: 'Los Ches',
      rating: '4.4',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.tasteofhome.com/wp-content/uploads/2018/05/Baja-Pork-Tacos_EXPS_SDAM18_43842_D12_05_1b.jpg'
      },
      name: 'Mis Taquitos',
      rating: '5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'http://newyorkstreetfood.com/wp-content/uploads/2010/06/indian-street-food.jpg'
      },
      name: 'Streets of India',
      rating: '4.5',
      phoneNumber: '1(888)-888-8888'
    },
    {
      image: {
        uri:
          'https://www.bing.com/th?id=OIP.1d8WnYQsi_8d6EIEKl_XPgHaEK&pid=Api&rs=1'
      },
      name: 'Los Ches',
      rating: '4.4',
      phoneNumber: '1(888)-888-8888'
    }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {restaurants.map((restaurant, indx) => (
          <FeedItem key={indx} {...restaurant} />
        ))}
      </ScrollView>
    </View>
  );
}

FeedScreen.navigationOptions = {
  title: 'tacOS'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
  }
});
