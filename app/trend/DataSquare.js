import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

// Styles & Fonts
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';     

// Components 
import PolylineSVG from './PolylineSVG';  

let deviceWidth = ( Dimensions.get('window').width / 2 )
let deviceHeight = ( Dimensions.get('window').height / 2 )



class DataSquare extends Component {
  navigate() { 
    var context = this;
    context.props.navigator.push({ name: 'Story' }); 
  }
  render(){
      // For Alternating Color Blocks
      let background;
      if (this.props.index%4 === 0) {
        background = StyleSheet.create({ 
          color: {backgroundColor: '#1fbba6' }})
      } else if ((this.props.index-1)%4 === 0) {
        background = StyleSheet.create({ 
          color: {backgroundColor: '#af6d7e' }})
      } else if ((this.props.index-2)%4 === 0) {
        background = StyleSheet.create({ 
          color: {backgroundColor: '#ccc600' }})
      } else {
        background = StyleSheet.create({ 
          color: {backgroundColor: '#00afd1' }})
      }

    return(

       <View style={[styles.dataSquare, {height: deviceWidth, width: deviceWidth}, background.color ]}>
        
        {/* Top Component */}
        <View style={styles.dataSquareTop}>
          <Text >
            <Icon name="ios-options" size={18} color="#fff"></Icon>
          </Text>
        </View>

        {/* Center Component */}
        <View style={styles.dataSquareCenter}>

            <Text style={styles.dataSquareCenterText}>
              {this.props.data.trend_name.toLowerCase()}
            </Text>

        </View>

        {/* Bottom Component */}
        <View style={styles.dataSquareBottom}>
          <View>
            <PolylineSVG />
          </View>
        </View>

      </View>
    );
  }    
}

export default DataSquare;
