import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePress = () => {
    console.log('Row press');
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="dark-content" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    );
  }
}

export default CurrencyList;
