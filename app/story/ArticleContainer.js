import React, { Component, PropTypes } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions, WebView, TouchableHighlight } from 'react-native';

// Actions & Store
import Store from '../store.js';
import * as storyActions from './storyActions';

// Components
import Publication from './Publication';

// Fonts & Styles
import styles from './styles.js';


// let deviceWidth = Dimensions.get('window').width
// let deviceHeight = Dimensions.get('window').height
// let WEBVIEW_REF = 'webview';
// let URL = 'https://www.google.com'


const ArticleContainer = (article) => {
  return (
    <View>
    	<Text>=>{article.title}</Text>
      {/* Data gets funneled into Publication */}
      <Publication
        publication={'Washington Post'}
        headline={article.title} 
        moodScore= {15}/>
    
    </View>
  );
}

export default ArticleContainer;
