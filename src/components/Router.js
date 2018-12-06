import StartScreen from './StartScreen';
import HomeScreen from './HomeScreen';
import {Platform,}from 'react-native';

import { TabNavigator,DrawerNavigator, StackNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import aboutScreen from './screens/aboutScreen';
import lastNews from './screens/lastNews';

// import MoreScreen from './screens/MoreScreen';
// import AuthScreen from './screens/AuthScreen';
// import SettingScreen from './screens/SettingScreen';
// import lastScreen from './lastScreen';


const MainNavigator = DrawerNavigator (  
{ 
  welcome:{screen: WelcomeScreen},
  start: { screen: StartScreen },
  Home: { screen: HomeScreen },
  about:{screen:aboutScreen},
  Home:{ screen : TabNavigator({
                 Home: { screen: HomeScreen },
                  start: { screen: StartScreen },
                  about:{screen:aboutScreen},
                },{tabBarPosition: 'bottom',}
                )} } 
    ,{tabBarPosition: 'bottom',
       tabBarOptions: {activeTintColor: 'red',showIcon:'true',tabStyle:{padding:5}
      ,labelStyle: {marginTop :Platform.OS === 'android' ? 5 : 0 ,padding:5,fontSize: 14,}
      ,style: { backgroundColor: '#99d6ff',padding:5},
      }
   }
  

       , );




export default MainNavigator;