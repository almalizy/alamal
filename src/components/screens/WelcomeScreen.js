import _ from 'lodash';
import React, { Component } from 'react';
import { Alert,View, Text, AsyncStorage ,Image} from 'react-native';
import Slides from './Slides';
import { AppLoading } from 'expo';
import { Entypo } from '@expo/vector-icons';

import  {first ,two,three,firstLogo,twoLogo ,threeLogo}  from './images'


const SLIDE_DATA = [
  { text: 'لاحياء التراث المكتبي\n'+ '    \t', color: 'grey'  ,imageBackground:first ,imageLogo:firstLogo },
  { text: 'عودة الي كتب  العلم \n'+'                     \t', color: '#009688' ,imageBackground:two, imageLogo:twoLogo},
  { text: ' حتي تستعيد الأمة مجدها' +  ' دار الأمل \t', color: '#03A9F4' ,imageBackground:three,imageLogo:threeLogo}
];

class WelcomeScreen extends Component {
  static navigationOptions = {
      
    title: 'الافتتاحية',
    drawerIcon: ({tintColor}) => (
         <Image
          source={require('./image/thumbnails.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />),

      tabBarIcon: () => (<Entypo  name=' text-document'  style={styles.icon}   />),
      
      };

  onSlidesComplete = () => {
    this.props.navigation.navigate('start'),Alert.alert('مرحبا بكم في دار الأمل ');
  }

  render() {
  

    return (
      <Slides data={SLIDE_DATA} 
              onComplete={this.onSlidesComplete}
              style = {{justifyContent:'center',alignItems:'center'}}
              />

    );
  }
}

styles={
  icon:{
    width: 24,
    height: 24,
    // color :'#0066ff'
    // tintColor:'white'
  },
}
export default WelcomeScreen;
