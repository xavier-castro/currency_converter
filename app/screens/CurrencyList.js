import React from 'react';
import {
  Text, FlatList, SafeAreaView, StatusBar,
} from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar translucent={false} barStyle="dark-content" />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </SafeAreaView>
);

export default CurrencyList;
