import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainPage from './src/Pages/MainPage/'
import PersonPage from './src/Pages/PersonPage/'
const MainNavigator = createStackNavigator({
  Home: { screen: PersonPage },
});

const App = createAppContainer(MainNavigator);

export default App;