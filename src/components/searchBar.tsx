import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.searchboxContainer}>
      <TextInput style={styles.inputBar} placeholder="Search for news..." />
    </View>
  );
};

const styles = StyleSheet.create({
  searchboxContainer: {
    elevation: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    backgroundColor: 'white',
    marginTop: 13,
  },
  inputBar: {
    color: 'black',
    textDecorationColor: '#c4c4c4',
    width: '100%',
  },
});
