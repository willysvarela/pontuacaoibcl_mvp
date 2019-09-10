import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainPage from './src/Pages/MainPage'
import PersonPage from './src/Pages/PersonPage'
const MainNavigator = createStackNavigator({
  Home: { page: MainPage },
});