import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi There');
    try {
      const responses = await yelp.get('/search', {
        params: {
          // Ini sama dengan /search?limit=50
          limit: 50,
          term: searchTerm,

          /**
           * params : location
           * Required if either latitude or longitude is not provided. This string indicates the geographic area
           * to be used when searching for businesses.
           * Examples: "New York City", "NYC", "350 5th Ave, New York, NY 10118".
           * Businesses returned in the response may not be strictly within the specified location.
           * @returns string
           */
          location: 'san jose',
        },
      });
      setResults(responses.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
