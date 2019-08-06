import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log('Press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('Press quote');
  };

  handleTextChange = (text) => {
    console.log('Change text', text);
  };

  handleSwapCurrency = () => {
    console.log('Press swap currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          onPress={this.handlePressBaseCurrency}
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeType={this.handleTextChange}
        />
        <InputWithButton
          onPress={this.handlePressQuoteCurrency}
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
