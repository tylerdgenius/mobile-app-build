import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const BackButton = () => {
  return (
    <View style={styles.backButtonContainer}>
      <FontAwesomeIcon name="chevron-left" />
      <Text style={styles.backText}>Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backText: {
    fontWeight: '700',
    marginLeft: 5,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
