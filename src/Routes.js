import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainPage from './Pages/MainPage';
import PersonPage from './Pages/PersonPage';
import AddPersonPage from './Pages/AddPersonPage';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: MainPage,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
