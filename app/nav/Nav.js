import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';     

class Nav extends Component {
  navigate() { this.props.navigator.push({ name: 'Trend' }); }
  render() {
    console.log('+++++++++++++')
    console.log(this.props)
    console.log('+++++++++++++')

    // For Alternating Color Blocks
  let navSwatches;
  if (this.props.index%4 === 0) {
    navSwatches = StyleSheet.create({ 
      tabs: {backgroundColor: '#1fbba6' },
      arrow: {color: '#fff'}
    })
  } else if ((this.props.index-1)%4 === 0) {
    navSwatches = StyleSheet.create({ 
      tabs: {backgroundColor: '#af6d7e' },
      arrow: {color: '#fff'}
    })
  } else if ((this.props.index-2)%4 === 0) {
    navSwatches = StyleSheet.create({ 
      tabs: {backgroundColor: '#ccc600' },
      arrow: {color: '#fff'}
    })
  } else if ((this.props.index-3)%4 === 0) {
    navSwatches = StyleSheet.create({ 
      tabs: {backgroundColor: '#00afd1' },
      arrow: {color: '#fff'}
    })
  } else {
    navSwatches = StyleSheet.create({ 
      tabs: {backgroundColor: '#eaedf1' },
      arrow: {color: '#eaedf1'}
    })
  }

    return (
      <View style={[styles.header, navSwatches.tabs]}> 
        <Text style={styles.preTitle}>
          Today On
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex:1}}>
            <TouchableOpacity
              onPress={this.navigate.bind(this)}>
              <Text style={{paddingLeft: 15}}>
               <Icon name="ios-arrow-back" size={32} style={navSwatches.arrow}></Icon>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:4}}>
            <Text style={styles.title}>
              Tandem News
            </Text>
          </View>
          <View style={{flex:1}}>
            <Text style={{fontSize: 10}}>
              { ' '}
            </Text>
          </View>
        </View>
        <Text style={styles.tagline}>
          News In Perspective
        </Text>
      </View> 
    );
  }
}

export default Nav;