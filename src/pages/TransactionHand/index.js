import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const TransactionHand = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
      <Header title="Cash On Hand" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput title={'Description'} placeholder="Add the description" />
        <Gap height={17} />
        <TextInput title={'Type'} placeholder="Debit / Credit" />
        <Gap height={24} />
        <Button title={'Save'} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>Last 3 Transactions</Text>
        <View style={styles.contentWrapper1}>
          <View>
            <Text style={styles.text1}>17 April 2020</Text>
            <Text style={styles.text2}>Water, Food</Text>
          </View>
          <View>
            <Text style={styles.hargaMasuk}>-Rp.300.000</Text>
          </View>
        </View>
        <View style={styles.contentWrapper1}>
          <View>
            <Text style={styles.text1}>18 April 2020</Text>
            <Text style={styles.text2}>Office supplies</Text>
          </View>
          <View>
            <Text style={styles.hargaMasuk}>-Rp.300.000</Text>
          </View>
        </View>
        <View style={styles.contentWrapper1}>
          <View>
            <Text style={styles.text1}>19 April 2020</Text>
            <Text style={styles.text2}>Top up</Text>
          </View>
          <View>
            <Text style={styles.hargaKeluar}>+Rp.300.000</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
    
  );
};

export default TransactionHand;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
    marginTop: 24,
  },
  contentWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 10,
    paddingTop: 10,
    padding: 10,
    borderRadius: 10,
    
    //shadow contener Last 3 Transactions
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  text1: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  hargaMasuk: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#D9435E',
    alignItems: 'flex-end',
  },
  hargaKeluar: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#1ABC9C',
    alignItems: 'flex-end',
  },
});
