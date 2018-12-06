import React,{Component} from 'react';
import {Text,View}from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class SettingScreen extends Component {
    static navigationOptions = {
        title:'الاعدادات',
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./image/thumbnails.png')}
              style={[styles.drawerIcon, {tintColor: tintColor}]}
            />
          )
       , tabBarIcon: () => (<Icon  name='cog'         />),
    }
    render(){
        
        return(
<View style={styles.container}>
<Text> الاعدادات   </Text>
<Text> SettingScreen   </Text>
<Text> AuthScreen   </Text>
<Text> AuthScreen   </Text>
<Text> AuthScreen   </Text>
<Text> AuthScreen   </Text>
</View>
        );
    }
}

const styles = ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerIcon:{
        width: 24,
        height: 24,
      },
  });
export default SettingScreen;