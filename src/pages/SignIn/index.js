import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign in" />
      <View style={styles.contentWrapper}>
        <TextInput
          title="Email Address"
          placeholder="type your email address"
        />
        <Gap height={16} />
        <TextInput title="Password" placeholder="type your password" />
        <Gap height={24} />
        <Button title="sign in" />
        <Gap height={12} />
        <Button
          title="Creat New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
