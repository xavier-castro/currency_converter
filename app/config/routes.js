import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { header: () => null } },
    Options: { screen: Options, navigationOptions: { headerTitle: 'Options' } },
    Themes: { screen: Themes, navigationOptions: { headerTitle: 'Themes' } },
  },
  {
    headerMode: 'screen', // Makes transition animation smoother
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeStack },
    CurrencyList: { screen: CurrencyListStack },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);

export default createAppContainer(MainStack);
