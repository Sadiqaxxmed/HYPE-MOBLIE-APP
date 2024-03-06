// PostCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostCard = ({ username, imageUrl, caption }) => {
  return (
    <View style={styles.container}>
      {/* User information */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Post image */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* Post caption */}
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  caption: {
    fontSize: 16,
  },
});

export default PostCard;