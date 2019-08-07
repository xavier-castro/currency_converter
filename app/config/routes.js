import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const MainStack = createStackNavigator({
  Home: { screen: Home },
  CurrencyList: { screen: CurrencyList },
});

export default createAppContainer(MainStack);
