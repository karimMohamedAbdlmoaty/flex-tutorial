import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,ScrollView
} from 'react-native';
import Pin from "./app/components/Pin";


export default class flexbasics extends Component {
  constructor(props){
    super(props)
    this.state = {
      Pin: {
        imageOne: {
          imagesource: require('./app/assets/images/image-one.png') ,
          originalWidth: 800 ,
          originalHeight: 1199
        }
      }
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource={this.state.Pin.imageOne}/> 
        <Pin pinsource={this.state.Pin.imageOne}/> 
        <Pin pinsource={this.state.Pin.imageOne}/> 
      </ScrollView>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    backgroundColor: '#F5FCFF'
  },
  boxContainer: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex: 3,
    backgroundColor: '#FFEEE4',
    justifyContent: "space-around"
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#F17F42'
  },
  boxThree: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: '#CE6D39',
    justifyContent: "space-between",
    alignItems: 'flex-end'

  },
});

AppRegistry.registerComponent('testing', () => flexbasics);