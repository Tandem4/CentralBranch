import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';     

const Nav = (props) => {
  return(
    <View style={styles.header}> 
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

export default Nav;