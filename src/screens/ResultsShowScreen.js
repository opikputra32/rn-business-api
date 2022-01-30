import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  // console.log(id);
  // console.log(result);
  /**
   * function helper
   * @param {returning base on yelp api} id
   * @returns response
   */
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Results show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
