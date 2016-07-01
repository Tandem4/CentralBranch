import React, { Component, PropTypes, TouchableHighlight } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions, WebView } from 'react-native';
import styles from './styles.js';       

const square = (props) => {
  return(
    <View style={{backgroundColor: '#1fbba6', flex: 1, height: deviceWidth }}>
      
      <View style={{ alignItems: 'flex-end', padding: 10 }}>
        <Text >
          <Icon name="ios-options" size={18} color="#fff"></Icon>
        </Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 10}}>
        <Text style={{fontSize: 25, fontFamily: 'Oswald', color: '#eaedf1', textAlign: 'center'}}>
          European Union
        </Text>
      </View>

      <View style={{ alignItems: 'center', padding: 10 }}>
        <Text>
          <Icon name="md-trending-up" size={34} color="#fff"></Icon>
        </Text>
      </View>

    </View>
  )
}

