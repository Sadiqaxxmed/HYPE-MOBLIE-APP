import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Test() {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        text: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      });

    const [message, setMessage] = useState('');
    
    useEffect(() => {
    // Function to fetch data from Flask endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000');
        // const data = await response.json();
        setMessage(response.data.message);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Flask Component</Text>
        <Text>{message}</Text>
        </View>
    )
}

  