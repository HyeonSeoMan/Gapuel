import React from 'react';
import {Button, ScrollView} from 'react-native';
import DebtList from '../containers/DebtList';
import HomeHeader from '../containers/HomeHeader';

const Home = (props) => {
  return (
    <ScrollView>
      <HomeHeader navigation={props.navigation} />
      <DebtList navigation={props.navigation} />
      <Button
        title="작성하기"
        onPress={() => {
          props.navigation.navigate('ContactsScreen', {
            moneyParam: props.navigation.getParam('moneyParam'),
          });
        }}
      />
    </ScrollView>
  );
};

export default Home;
