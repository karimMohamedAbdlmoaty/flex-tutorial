import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import UtilityNavButton from "./UtilityNavButton";

export default class Button extends Component {
  render() {
      let bgColor ,textWeight , textColor
      if (this.props.red){
          bgColor ="red"
          textColor = "white"
      }else{
        bgColor ="#cecece"
        textWeight = "bold"
    }
        return (
            <View style={[styles.PinButton,{backgroundColor: bgColor}]}>
                {this.props.icon && <UtilityNavButton icon="pin"/>}
                <Text style={[styles.PinButtonText,{color:textColor, fontWeight:textWeight}]}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    PinButton: {
        flexDirection: "row",
        backgroundColor:"red",
        // padding:8,
        borderRadius:6,
        // width: 60,
        // justifyContent: "space-between"
    },
    PinButtonText:{
        paddingLeft:9,
        paddingTop:7
    }
})