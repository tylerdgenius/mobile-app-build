import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const EmptyNews = () => {
  return (
    <View>
      <Text>There are currently no news items</Text>
      <Text style={styles.grayText}>or drag to reload</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grayText: {
    color: '#c4c4c4',
    fontSize: 14,
    marginTop: 5,
  },
});
