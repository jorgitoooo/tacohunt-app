import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FeedItem(props) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.flexRow}>
        <Image style={styles.image} source={props.image} />
        <View style={styles.flexCol}>
          <Text style={styles.paragraph}>{props.name}</Text>
          <Text style={styles.paragraph}>{props.rating}</Text>
        </View>
        <View>
          {!liked ? (
            <FontAwesome.Button
              backgroundColor='white'
              color='#dd0044'
              name='heart-o'
              onPress={() => setLiked(!liked)}
            ></FontAwesome.Button>
          ) : (
            <FontAwesome.Button
              backgroundColor='white'
              color='#dd0044'
              name='heart'
              onPress={() => setLiked(!liked)}
            ></FontAwesome.Button>
          )}
          <FontAwesome.Button
            backgroundColor='white'
            color='#55dd00'
            name='phone'
          ></FontAwesome.Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  flexCol: {
    flex: 1,
    flexDirection: 'column'
  },
  paragraph: {
    flex: 2,
    margin: 4,
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
});
