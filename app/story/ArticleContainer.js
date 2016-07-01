import React, { Component, PropTypes } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions, WebView, TouchableHighlight } from 'react-native';
import styles from './styles.js';

import Publication from './Publication';

// let deviceWidth = Dimensions.get('window').width
// let deviceHeight = Dimensions.get('window').height
// let WEBVIEW_REF = 'webview';
// let URL = 'https://www.google.com'


const ArticleContainer = (article) => {
  return (
    <View style={styles.card}>
      {/* Data gets funneled intp Publication */}
      <Publication
        publication={'Washington Post'}
        headline={'Example of a very long descriptive headline from a major national publication on a trending topic'} />
    
    </View>
  );
}

export default ArticleContainer;
