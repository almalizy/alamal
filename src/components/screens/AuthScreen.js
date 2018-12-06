import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class AuthScreen extends Component {
    static navigationOptions = { title:'صفحة حسابك',
    tabBarIcon: () => (<Icon  name='newspaper-o' />),
}
    render(){
        return(

<View style={styles.container}>
<Text style={{fontSize:40}}> صفحة حسابك   </Text>
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
  });

export default AuthScreen;