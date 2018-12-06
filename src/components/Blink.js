import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second

    setInterval(() => {
      this.setState({ showText: !this.state.showText }); }, 2000);}

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.text}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create ({
  text :{
        fontSize:30,
    }
    
    });


export default Blink