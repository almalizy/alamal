import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image,Linking,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class lastNews extends Component {
    static navigationOptions = { title:'ااخر الاخبار ' ,
       tabBarIcon: () => (<Icon  name='newspaper-o'     />),
}
    render(){
        return(
<View>

      <View style={styles.container}>
         <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('DrawerOpen')}          >
         <Image
          source={require('./image/list.png')}
          style={styles.icon}
        />
         </TouchableOpacity>

      </View>

      <View>
         <Button 
          icon={{name:'code'}}
          title="لتصفح ءاخر الاخبار من خلال موقع المجلة"
          backgroundColor="blue"
          onPress={() => Linking.openURL('http://www.qiraatafrican.com/home/category/18')}
          />

      </View>

</View>
        );
    }
}

const styles = {
    icon:{
      width: 24,
      height: 24,
    },
    container:{
      flex:1.5,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:90,
      padding:20
    },
    buttonText : {
      textAlign : 'center',
      color : '#ecf0f1'
  }
  };
export default lastNews;