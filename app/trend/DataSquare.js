import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';       

let deviceWidth = ( Dimensions.get('window').width / 2 )
let deviceHeight = ( Dimensions.get('window').height / 2 )

const DataSquare = (props) => {
  return(
    <View style={[styles.dataSquare, {height: deviceWidth}, styles.skyblue]}> 
      
      {/* Top Component */}
      <View style={styles.dataSquareTop}>
        <Text >
          <Icon name="ios-options" size={18} color="#fff"></Icon>
        </Text>
      </View>

      {/* Center Component */}
      <View style={styles.dataSquareCenter}>
        <Text style={styles.dataSquareCenterText}>
          European Union
        </Text>
      </View>

      {/* Bottom Component */}
      <View style={styles.dataSquareBottom}>
        <Text>
          <Icon name="md-trending-up" size={34} color="#fff"></Icon>
        </Text>
      </View>

    </View>
  );
}

export default DataSquare;
