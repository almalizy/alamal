import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions ,ImageBackground,Image,Platform} from 'react-native';
import { Button } from 'react-native-elements';
import WelcomeScreen from './WelcomeScreen';
import styles from "./styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="...للمتابعة..."
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          ImageBackground = {slide.imageBackground}
          key={slide.text}
          style={[styles.slideStyle,]}
        >
          <Image  source = {slide.imageLogo}   style = {styles.imageLogo }/>
          <Text style={styles.textStyle}>{slide.text}</Text>
          <ImageBackground  source = {slide.imageBackground}   style = {styles.imageBackground }  >
          </ImageBackground>
          {this.renderLastSlide(index)}
          
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}



export default Slides ;