// FeedScreen.js

import React from 'react';
import { View, ScrollView } from 'react-native';
import PostCard from '../component/postcard.js';

const FeedScreen = () => {
  // Dummy data for demonstration purposes
  const posts = [
    { id: 1, username: 'user1', imageUrl: 'url1', caption: 'Post 1' },
    { id: 2, username: 'user2', imageUrl: 'url2', caption: 'Post 2' },
    // More posts...
  ];

  return (
    // ScrollView enables scrolling through the feed content
    <ScrollView>
      {/* View wraps the content inside the ScrollView */}
      <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        {/* Map through the array of posts and render a PostCard for each post */}
        {posts.map(post => (
          <PostCard
            key={post.id} // Unique key for each post
            username={post.username} // Username of the post author
            imageUrl={post.imageUrl} // URL of the post image
            caption={post.caption} // Caption of the post
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default FeedScreen;