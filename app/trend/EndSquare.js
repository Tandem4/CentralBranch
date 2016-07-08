import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';       

let deviceWidth = ( Dimensions.get('window').width / 2 )
let deviceHeight = ( Dimensions.get('window').height / 2 )

const EndSquare = (props) => {
  return(
    <View style={[styles.endSquare, {height: deviceWidth}]}>

      {/* Top Component */}
      <View style={styles.endSquareTop}>
        <Text>
          { ' ' }
        </Text>
      </View>

      {/* Center Component */}
      <View style={styles.endSquareCenter}>
        <Text style={styles.endSquareCenterText}>
          <Icon name="ios-happy-outline" size={54} color="#fff"></Icon>
        </Text>
      </View>
      
      {/* Bottom Component */}
      <View style={styles.endSquareBottom}>
        <Text style={styles.endSquareBottomText}>
          Loading ...
        </Text>
      </View>

    </View>
  );
}

export default EndSquare;
