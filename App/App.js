import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Test from './src/test';
// import FeedScreen from './src/components/FeedScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './src/screens/FeedScreen'; // Import the FeedScreen component

const Stack = createStackNavigator(); // Create a stack navigator


const App = () => {

  return (
    // Wrap your app with NavigationContainer
    <NavigationContainer>
      {/* Stack Navigator for managing screens */}
      <Stack.Navigator>
        {/* Define screens within the stack */}
        <Stack.Screen name="Feed" component={FeedScreen} /> {/* Add FeedScreen as a screen */}
        {/* Add other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (

  //   <View style={styles.container}>
  //     <Text style={styles.text}>Hello, React Native!</Text>
  //     <Text>
  //     <Test />
  //     <FeedScreen />
  //     </Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Test from './src/test';

// const App = () => {
//   return (

//     <View style={styles.container}>
//       {/* <Text style={styles.text}>Hello, React Native!</Text> */}
//       <Text>
//       <Test />
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default App;