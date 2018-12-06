import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,Linking} from 'react-native';

import { Entypo } from '@expo/vector-icons';


class aboutScreen extends Component {
    static navigationOptions = { title:'للتواصل معنا ' ,
    drawerIcon: ({tintColor}) => (
        <Image
          source={require('./image/notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />),  
             tabBarIcon: () => (<Entypo  name='tablet'     />),
}
    render(){

        return(
          
<View style={styles.accounts}>

      <View style={styles.listStyle}>
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('DrawerOpen')}          >
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('DrawerOpen')}          >
          </TouchableOpacity>
      </View>

   


    <View style={styles.allButton}>
          <TouchableOpacity 
                      onPress={() => Linking.openURL('https://www.facebook.com/%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%A3%D9%85%D9%84-%D9%84%D9%84%D8%B7%D8%A8%D8%B9-%D9%88%D8%A7%D9%84%D9%86%D8%B4%D8%B1-%D9%88%D8%A7%D9%84%D8%AA%D9%88%D8%B2%D9%8A%D8%B9-1680540922179794/')}
                      >
            <Image
              source={require('./image/facebook.png')}
              style={styles.button}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => Linking.openURL('https://twitter.com/qiraatafrican')}
                      >
            <Image
              source={require('./image/twitter.png')}
              style={styles.button}
            />
          </TouchableOpacity>

          <TouchableOpacity 
                      onPress={() => Linking.openURL('https://www.youtube.com/user/qiraatafrican?feature=mhee')}
                      >
            <Image
              source={require('./image/youtube.png')}
              style={styles.button}
            />
          </TouchableOpacity>


    </View>
    <Text style={styles.textStyle}>  تواصل معنا من خلال صفحاتنا علي مواقع التواصل الاجتماعي</Text>

</View>

        );
    }
}
const styles = {
    icon:{
      width: 24,
      height: 24,
      // color :'blue'
    },
    iconAbout:{
      width: 380,
      height: 400,
      flex:1
    },
    listStyle:{
      flex:0.75,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:10,
      padding:20
    },
    button:{
      width: 60,
      height: 60,
       borderRadius:20,
       padding:10,
       marginBottom:20,
       marginLeft:40,
       marginRight:40,
       shadowColor:'grey',
       shadowOffset:{width: 0, height: 5},
       shadowOpacity:0.35,
    },
    textStyle: {
      fontSize: 22,
      // fontFamily:"Palatino Linotype", 
      fontStyle: "italic",
      color: 'black',
      justifyContent: 'center',
      alignSelf:'center',
      alignItems:"center",
      textAlign:'center',
      // bottom :-35 ,
      marginTop:50,
      flex: 2
  
    },
    accounts:{
      flex:3,
      paddingTop:60,
      alignItems:'flex-end',
      justifyContent:'space-between',
      flexDirection:'column',
      alignSelf:'center'
    },
    allButton:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    }
  };


export default aboutScreen;