import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  // console.log(props);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  // console.log(results);
  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
          navigation={navigation}
        />

        {/* <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        /> */}
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
