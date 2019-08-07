import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const MainStack = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { header: () => null } },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

export default createAppContainer(MainStack);
