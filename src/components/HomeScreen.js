import React from 'react';
import { StyleSheet, Text, View,ScrollView, Linking ,Image} from 'react-native';

import {Card,Button,Icon}from 'react-native-elements';
import Deck from './Deck';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';


const DATA = [
  { id: 1, title: 'العدد 33: رجب 1438هـ - يوليو 2017م',text: 'قراءة في ظاهرة اليتم في إفريقيا', uri: 'http://www.qiraatafrican.com/media/magazine/6448-111-cov33.jpg',url:'http://www.qiraatafrican.com/media/magazine/6448-Issue%2033%20Low.pdf' },
  { id: 2, title: 'العدد 32: ربيع الآخر 1438هـ - أبريل2017م',uri: 'http://www.qiraatafrican.com/media/magazine/1115-c33.jpg',url:'http://www.qiraatafrican.com/media/magazine/1115-Issue%2032%20Low.pdf' },
  { id: 3, title: 'العدد 31: محرم 1438هـ - يناير 2017 م',uri: 'http://www.qiraatafrican.com/media/magazine/5566-c31.jpg',url:'http://www.qiraatafrican.com/media/magazine/5566-Issue%2031%20Low.pdf' },
  { id: 4, title: 'العدد 30 : شوال1437هـ - أكتوبر 2016م', uri: 'http://www.qiraatafrican.com/media/magazine/41-cover30.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/41-Issue%2030%20Low.pdf'},
  { id: 5, title: 'العدد 29 : رجب 1437هـ - يوليو 2016م', uri: 'http://www.qiraatafrican.com/media/magazine/934-co29.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/934-na%2029.pdf'},
  { id: 6, title: 'العدد 28 : ربيع الآخر 1437هـ - أبريل 2016م',uri: 'https://ar.qantara.de/sites/default/files/styles/slideshow_wide/public/uploads/2016/04/12/sdwrlddlthmnwlshrynmnmjlqrtfryqy.jpg?itok=_6l456Ei' ,url:'http://www.qiraatafrican.com/media/magazine/2601-Issue%2028%20Low.pdf'},
  { id: 7, title: 'العدد 27 : محرم 1437هـ - يناير 2016م', uri: 'http://www.qiraatafrican.com/media/magazine/3114-nf27.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/3114-n27.pdf'},
  { id: 8, title: 'العدد 26: شوال 1436هـ - أكتوبر2015م', uri: 'http://www.qiraatafrican.com/media/magazine/7784-3746-nf26.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/7784-n26.pdf'},

  { id: 9, title: 'العدد 25: رجب 1436هـ - يوليو2015م', uri: 'http://www.qiraatafrican.com/media/magazine/2130-6493-nf25.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/2130-n25.pdf'},
  { id: 10, title: 'العدد 24: ربيع الآخر 1436هـ - أبريل2015م', uri: 'http://www.qiraatafrican.com/media/magazine/4420-8909-nf24.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/4420-n24.pdf'},
  { id: 11, title: 'العدد 23: محرم 1436هـ - يناير 2015م', uri: 'http://www.qiraatafrican.com/media/magazine/9454-8718-nf23.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/9454-n23.pdf'},
  { id: 12, title: 'العدد 22: شوال 1435هـ - أكتوبر2014م', uri: 'http://www.qiraatafrican.com/media/magazine/7643-78-nf22.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/7643-n22.pdf'},
  { id: 13, title: 'العدد21: رجب 1435 هـ - يوليو2015م', uri: 'http://www.qiraatafrican.com/media/magazine/5590-6666-nf21.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/5590-n21.pdf'},
  
  { id: 14, title: 'العدد 20: ربيع الآخر1435هـ - إبريل2014م', uri: 'http://www.qiraatafrican.com/media/magazine/4807-nf20.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/4807-العدد 20.pdf'},
  { id: 15, title: 'العدد 19: محرم  1435هـ - يناير 2014م', uri: 'http://www.qiraatafrican.com/media/magazine/9173-nf19.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/9173-العدد 19.pdf'},
  { id: 16, title: 'العدد 18: شوال 1434هـ - أكتوبر 2013م', uri: 'http://www.qiraatafrican.com/media/magazine/2376-nf18.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/2376-العدد 18.pdf'},
  { id: 17, title: 'العدد 17: رجب  1434هـ - يوليو 2013م', uri: 'http://www.qiraatafrican.com/media/magazine/4841-nf17.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/4841-العدد 17.pdf'},
  { id: 18, title: 'العدد 16: ربيع الآخر1434هـ - أبريل  2013 م', uri: 'http://www.qiraatafrican.com/media/magazine/9571-nf16.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/9571-العدد 16.pdf'},

  { id: 19, title: 'العدد 15: محرم 1434هـ - يناير 2013م', uri: 'http://www.qiraatafrican.com/media/magazine/9429-nf15.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/9429-العدد 15.pdf'},
  { id: 20, title: 'العدد 14:  شوال 1433هـ - اكتوبر 2012م', uri: 'http://www.qiraatafrican.com/media/magazine/4564-nf14.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/4564-العدد 14.pdf'},
  { id: 21, title: 'العدد 13: رجب 1433 هـ - يوليو2012 م', uri: 'http://www.qiraatafrican.com/media/magazine/187-nf13.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/187-العدد 13.pdf'},
  { id: 22, title: 'العدد12 : ربيع الآخر1433 هـ - أبريل 2012 م', uri: 'http://www.qiraatafrican.com/media/magazine/1593-nf12.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/1593-العدد 12.pdf'},
  { id: 23, title: 'العدد 11: محرم  1433هـ - يناير 2012 م', uri: 'http://www.qiraatafrican.com/media/magazine/239-nf11.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/239-العدد 11.pdf'},

  { id: 24, title: 'العدد 10: شوال  1432هـ - ديسمبر 2011م', uri: 'http://www.qiraatafrican.com/media/magazine/7014-nf10.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/7014-العدد 10.pdf'},
  { id: 25, title: 'العدد 9 : رجب 1432هـ يوليو2011م', uri: 'http://www.qiraatafrican.com/media/magazine/9723-nf9.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/9723-العدد 9.pdf'},
  { id: 26, title: 'العدد 8 : ربيع الآخر1432هـ -  إبريل2011م', uri: 'http://www.qiraatafrican.com/media/magazine/4778-nf8.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/4778-العدد 8.pdf'},
  { id: 27, title: 'العدد 7 : محرم 1432هـ - يناير 2011م', uri: 'http://www.qiraatafrican.com/media/magazine/7580-nf7.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/7580-العدد 7.pdf'},
  { id: 28, title: 'العدد 6 : شوال 1431هـ - سبتمبر 2010م', uri: 'http://www.qiraatafrican.com/media/magazine/9559-nf6.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/9559-العدد 6.pdf'},

  { id: 29, title: 'العدد 5 : جمادى الثاني 1431هـ - يونيو 2010م', uri: 'http://www.qiraatafrican.com/media/magazine/2953-nf5.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/2953-العدد 5.pdf'},
  { id: 30, title: 'العدد 4 : شوال1430هـ - سبتمبر 2009م', uri: 'http://www.qiraatafrican.com/media/magazine/8781-nf4.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/8781-العدد 4.pdf'},
  { id: 31, title: 'العدد 3 : ذو الحجة 1429هـ - ديسمبر 2008م', uri: 'http://www.qiraatafrican.com/media/magazine/115-nf3.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/115-العدد 3.pdf'},
  { id: 32, title: 'العدد 2 : شعبان 1426هـ - سبتمبر 2005م', uri: 'http://www.qiraatafrican.com/media/magazine/1779-nf2.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/1779-العدد 2.pdf'},
  { id: 33, title: 'العدد 1 : رمضان 1425هـ - اكتوبر 2004م', uri: 'http://www.qiraatafrican.com/media/magazine/8531-nf1.jpg' ,url:'http://www.qiraatafrican.com/media/magazine/8531-العدد 1.pdf'},
];

class HomeScreen extends React.Component {

static navigationOptions = {
      
  title: 'أشهر مطبوعاتنا',
     drawerIcon: ({tintColor}) => (
          <Image
          source={require('./screens/image/list.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />),
      tabBarIcon: () => (<Entypo  name='list'  style={styles.icon}   />),
    
    };


renderCard(item){
  
      return(
              <Card 
                  key={item.id}
                  title={item.title}
                  image={{ uri: item.uri }}
                  >
                      <Text  > {item.text} </Text>
                      <Button 
                          icon={{name:'code'}}
                          title="لقراءة المزيد"
                          backgroundColor="blue"
                          onPress={() => Linking.openURL(item.url)}
                          />
              </Card>
                );

              }

render() {
  
    return (
      
      <ScrollView >
        <View style={styles.container}>
           <Deck 
            data={DATA}
            renderCard={this.renderCard}
            style={styles.image}
            />
          </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
            },
  icon:{
      width: 24,
      height: 24,
      // color :'blue'

           },
  text: {
    justifyContent: 'center', 
    alignItems :'center',
        },
});




export default HomeScreen;