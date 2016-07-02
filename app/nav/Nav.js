import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';     

class Nav extends Component {

  render() {

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
  } else if ((this.props.index-3)%4 === 0) {
    background = StyleSheet.create({ 
      color: {backgroundColor: '#00afd1' }})
  } else {
    background = StyleSheet.create({ 
      color: {backgroundColor: '#eaedf1' }})
  }

    return (
      <View style={[styles.header, background.color]}> 
        <Text style={styles.preTitle}>
          Today On
        </Text>
        <Text style={styles.title}>
          Tandem News
        </Text>
        <Text style={styles.tagline}>
          News In Perspective
        </Text>
      </View> 
    );
  }
}

export default Nav;