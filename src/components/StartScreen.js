import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Button,Image,Linking,ImageBackground,Platform} from 'react-native';
import Blink from './Blink' ;
import { Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const pic1 = require("./screens/image/1.jpeg");

class StartScreen extends React.Component  {
  static navigationOptions = { title:'الرئيسة ' ,
  drawerIcon: ({tintColor}) => (
    <Image
          source={require('./screens/image/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />),
  tabBarIcon: () => (<Icon  name='home'     />),
}
  render(){
    let pic = {uri: 'http://www.qiraatafrican.com/images/logo1.png'};
  
  return ( 
<View  style={styles.container}  >
    <ImageBackground  
          style={styles.imageContainer}
          imageStyle = {styles.image}
          source ={pic1} >

       <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')} >
            <Entypo
              name='dots-three-vertical'
              size={32}
              style={{ width: 44,
                height: 44,
                marginTop:30,
                color: 'blue',
              left:10}}
            />
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')} >
                  <Entypo
                    // name='grid'
                    size={32}
                    style={styles.icon}
                  />
     </TouchableOpacity>
            
    

    <View style={styles.buttonSTyles}>
       <Button 
          
          title="لتصفح ءاخر الاخبار من خلال موقع المجلة"
          style={{right:30,padding:10,backgroundColor:'#000000'}}
          onPress={() => Linking.openURL('http://www.qiraatafrican.com/home/category/18')}
          backgroundColor='#00000000'
          />
      
   </View>
   <View style={styles.buttonSTyles}>
   <Button 
          
          title="الرئيسة"
          style={{right:30,padding:10,color:'#00000000',backgroundColor:'yellow'}}
          onPress={() => this.props.navigation.navigate('Home')}         
          />
     </View>

       <View style={styles.blinkStyles} >
          <Blink  text='دار الأمل ترحب بكم' style={styles.text}/>  
     </View>
  
     </ImageBackground>
</View>

     );
   }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blinkStyles :{
      alignItems:'center',
      justifyContent:'center',
      paddingTop:60,
      padding:20
    },
    icon:{
      width: 24,
      height: 24,
    },
    arrow:{
      width: 50,
      height: 50,
      marginTop : 100
    },
  button :{
      backgroundColor : '#c0392b',
      paddingVertical : 10,
      alignItems:'center',
      justifyContent:'center',

    },
  text :{ 
     fontSize: 5,
    },
    imageContainer:{
      flex:1
    },
    image:{
      flex:1,
      width:null,
      height:null,
      resizeMode: 'cover',

    },
       buttonSTyles:{
        justifyContent:'center' ,
        alignItems: 'center',
        margin:30 ,
        flexDirection: 'column',
        justifyContent: 'space-between',

       }
    
  });

export default StartScreen ;