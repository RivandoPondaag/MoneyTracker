import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Transaction = () => {
  return (
    <View style={styles.page}>
      <View style={styles.contentWrapper}>
        <Text>Transaction</Text>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
});
