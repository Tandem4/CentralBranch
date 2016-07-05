import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import  NavigationBar  from 'react-native-navbar';

// Actions & Stores
import * as summaryActions from './summaryActions';
import Store from '../store.js';
// Dummy Data
import articles from '../data/articles';

// Styles & Fonts
import styles from './styles.js';

// Components
import ArticleContainer from './ArticleContainer';
import Nav from '../nav/Nav';


class Summary extends Component {

  componentWillMount() {
    this.prepopulateData.bind(this)();
  }

  prepopulateData() {
    var context = this;

    // TODO:  Pass in the trend id from Trend view onPress event
    fetch('http://192.241.210.120:1337/api/v1/trends/1')
    .then(function(res) {
      context.props.requestArticles(JSON.parse(res._bodyText));
    })
    .catch(function(err) {
      console.log("SOMETHING WENT WRONG", err);
    });
  }

  navigate() { this.props.navigator.push({ name: 'Trend' }); }
  
	render() {
		const { state, actions } = this.props;

		return (

        <View style={styles.body}>

          {/* Specify unsticky scroll */}
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}>

            <Nav index={3} navigator={this.props.navigator} />

            <View>
              <Text>
                { ' ' }
              </Text>
            </View>

            {/* Funnel store data into ListView */}
            <ListView
              dataSource={this.props.dataSource}
              {...actions}
              renderRow = {ArticleContainer}
              enableEmptySections={true} />

          </ScrollView>
        
        </View>   
    )
	}
}

function mapStateToProps(state) {
	return {
		articlesData: state.articlesData,
		// for ListView
		dataSource: function() {
      var currentArticles = state.dataSource.cloneWithRows(state.articlesData.articles || []);

      currentArticles._dataBlob.s1.sort(function(a, b) {
        if (a.created_at > b.created_at) {
            return -1;
          }
          if (a.created_at < b.created_at) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });

      return currentArticles;
    }()
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(summaryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);