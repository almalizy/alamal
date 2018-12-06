import {  Dimensions ,ImageBackground,Platform} from 'react-native';
import { Font } from 'expo';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default {
        slideStyle: {
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          width: SCREEN_WIDTH,
        },
        imageBackground:{
          position:'absolute',
          backgroundColor:'green',
          borderRadius:5,
          flexDirection:'row',
          height:330,
          padding:5,
          paddingTop:16,
          bottom :20 ,
          right :10,
          left : 10 ,
          borderWidth:1,
          borderColor:'green',
          flex:2
       },
       imageLogo:{
        position: "absolute",
        left: Platform.OS === "android" ? 40 : 20,
        top: Platform.OS === "android" ? 35 : 30,
        width: 320,
        height: 200,
        flex:1,
        marginVertical: 5,
        alignSelf: "center",
      
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
          bottom :-35 ,
          marginTop:200,
          flex: 3
      
        },
        buttonStyle: {
          backgroundColor: "blue", alignSelf: "center"
          // backgroundColor: 'green',
          // justifyContent: 'center',
          // alignItems: 'center',
          // padding:10,
          // marginBottom:3,
          // borderRadius:0,
          // shadowColor:'blue',
          // shadowOffset:{width: 0, height: 5},
          // shadowOpacity:0.35,
        
        },
      
    
};