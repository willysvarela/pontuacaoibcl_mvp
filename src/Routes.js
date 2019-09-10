import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainPage from './Pages/MainPage';
import PersonPage from './Pages/PersonPage';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: MainPage,
      Person: PersonPage,
    },
    {
      initialRouteName: 'Person',
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
