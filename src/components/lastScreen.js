import React,{Component} from 'react';
import {Text,View,Platform,Image}from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Blink from './Blink' ;


class lastScreen extends Component {
    
    static navigationOptions = { title:'العدد الاخير ',
    tabBarIcon: () => (<Image  source={require('./screens/image/last.png')} style={styles.icon}  />),
    header :({navigate}) => {
        right: <Button 
        onPress = {() => navigate('Home') } 
        style={styles.buton}  />
    },
}


render(){
    const { navigate } = this.props.navigation ;
return(

<View style={styles.container}>

        <View style={styles.platform}>
        <Button 
        title = "الاعداد السابقة"
        onPress = {() => navigate('Home')}
        style={styles.button}
        backgroundColor="rgba(0,0,0,0)"
        color="blue"
        style={styles.button}
        />
        </View>

        <Blink  text={' العدد الاخير '}  style={styles.container} />
        

        <View >
            <Image  
                  source={require('./screens/image/cover35.jpg')} 
                  style={styles.image} 
            />
        </View>

</View>
        );
    }
}


const styles={
    container:{
        padding :30 ,
        paddingTop:2,
        justifyContent: 'center', 
        alignSelf:'center',
        flex:1,
    },
    button:{ 
        alignItems: 'flex-end',
        flexDirection: 'column',
        marginTop:5,
        paddingTop:2,
        padding:5
    

    },
    image:{
        width:350,
        height:300 ,
        alignSelf:'center'
     
    },
    icon:{
        width: 24,
        height: 24,
        // tintColor:'white'
      },
    platform:{
        marginTop :Platform.OS === 'android' ? 24 : 0
    },
   
}
export default lastScreen;



  
//     static navigationOptions = { 
// title:'review',
// headerRight: ({navigate}) => {
//         return(
//         <Button 
//         title="Info" 
//         onPress = {() => navigate('settings')}
//         />
//         );       
//     }
// }
// render(){
//     return(

  //     const { state, setParams } = navigation;
    //     const isInfo =  'settings';
    //     return {
    //       title: isInfo ? ` Contact Info` : `Chat with `,
    //       headerRight: (
    //         <Button
    //           title={isInfo ? 'Done' : ` info`}
    //           onPress={() => setParams({ mode: isInfo ? 'none' : 'settings' })}
    //           />
    //       ),
    //     };
    //   };