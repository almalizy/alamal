import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';


class MapScreen extends Component {
    static navigationOptions = { title:'المزيد',
    tabBarIcon: () => (<Entypo
        name='grid'
        size={32}
        style={styles.tabBarIcon}
      />),
}
    render(){
        return(
<View >
    <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('DrawerOpen')}          >
         <Entypo
          name='grid'
          size={32}
          style={styles.listIcon}
        />
         </TouchableOpacity>
     </View>

    <View style={styles.textContainer}>
     <Text style={styles.text}> المزيد   </Text>
    </View>
</View>

        );
    }
}

const styles = {
    listIcon:{
      width: 24,
      height: 24,
      color:'blue',
      
    },
    tabBarIcon:{
        width: 24,
        height: 24,
        color:'blue'
    },
    container:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:60,
      padding:20
    },
    textContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:40,
    }
  };

export default MapScreen;