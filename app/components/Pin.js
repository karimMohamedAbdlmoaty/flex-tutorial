import React, {Component} from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import UtilityNavButton from "./UtilityNavButton";
import Button from './Button';
import LocalImage from "./LocalImage";

export default class Pin extends Component {
  render() {
    return (
        <View style={styles.PinContainer}>
            <View style={styles.PinHeader}>
                <View style={styles.UtilityNav}>
                    <UtilityNavButton icon="ios-arrow-back"/>
                    <UtilityNavButton icon="ios-star"/>
                    <UtilityNavButton icon="ios-paper-plane"/>
                    <UtilityNavButton icon="ios-more"/>
                </View>
                <View style={styles.PinButtonContainer}>
                    <View style={styles.PinButton}>
                        <Button red icon text="save" />
                    </View>
                </View>
            </View> 


            <View style={styles.PinContent}>
                <LocalImage 
                    source={this.props.pinsource.imagesource}
                    originalWidth={this.props.pinsource.originalWidth}  
                    originalHeight={this.props.pinsource.originalHeight} />
            </View>


            <View style={styles.PinMeta}>
                <View style={styles.PinMetaTextContainer}>
                    <Text style={styles.PinMetaText}>Saved from</Text>
                    <Text style={[styles.PinMetaText,styles.TextBold]}>web.com</Text>
                </View>
                <View style={styles.PinButtonContainer}>
                    <View style={[styles.PinButton,styles.UtilityButton]}>
                    <Button text="visit" />
                    </View>
                </View>
            </View>



            <View style={styles.PinUser}>
                <View style={styles.PinUserAvatar }>
                    {/* <Text>Placeholder</Text> */}
                </View>
                <View style={styles.PinUserContainer }>
                    <Text style={styles.PinUserText }>  
                        <Text style={styles.TextBold }>User Name </Text>Saved to <Text style={styles.TextBold }>ttt </Text>space</Text><Text style={styles.PinUserText }>desc: sosksksjhsnnn </Text>
                </View>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    PinContainer: {
        // flex: 1,
        // alignSelf:"stretch",
        // backgroundColor: "green"
    },
    PinHeader:{
        marginTop:32,
        flex: 1,
        backgroundColor:"white",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent:"space-between",
        minHeight: 50 ,
        padding:8
    },
    UtilityNav: {
        flexDirection: "row",
        justifyContent:"space-between",
        flex: 1,
    },
    PinButton: { 
        flexDirection: "row",
        backgroundColor:"red",
        padding:8,
        borderRadius:6,
        width: 90
    },
    PinButtonContainer:{
        flex:1,
        alignItems: "flex-end"
    },
    PinContent:{
        backgroundColor:"#c9c9c9",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft: 8,
        paddingRight: 8
    },
    ImagePlaceholder:{
        backgroundColor:"#1e1e1e",
        flex: 1,
        alignSelf:"stretch",
        borderRadius:6,
    },
    PinMeta: {
        flex: 1,
        minHeight:70,
        // backgroundColor:"red",
        flexDirection: "row",
        paddingTop:16,
        paddingBottom: 8,
        paddingRight:8,
        paddingLeft:8


    },
    PinMetaTextContainer: {
        
    },
    UtilityButton:{
        backgroundColor:"#cecece",
        alignItems:"center",
        justifyContent:"center"
    },
    UtilityButtonText:{
        color: "black",
        fontWeight:"bold",
    },
    PinUserContainer: {
        // backgroundColor: "red",
    },
    PinUser:{
        flex:5,
        flexDirection: "row",
        paddingLeft:8,
        paddingRight:8
    },
    PinUserAvatar:{
        width:50,
        height:50,
        borderRadius: 25,
        backgroundColor: "black",
        marginRight: 8

    },
    TextBold:{
        fontWeight:"bold"
    },
    PinButtonText:{
        paddingRight:10
    }

})