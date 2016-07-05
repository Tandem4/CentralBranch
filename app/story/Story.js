import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import  NavigationBar  from 'react-native-navbar';

// Actions & Stores
import * as storyActions from './storyActions';
import Store from '../store.js';

// Dummy Data
import articles from '../data/articles';

// Styles & Fonts
import styles from './styles.js';

// Components
import ArticleContainer from './ArticleContainer';
import Nav from '../nav/Nav';
import Publication from './Publication';


class Story extends Component {

  // componentWillMount() {
  //   this.prepopulateData.bind(this)();
  // }


  // prepopulateData() {
  //   var context = this;
  //   // Dummy Data Version
  //   // context.props.requestArticles(articles);
  //   // console.log('this passes', this.props.articlesData);
   

  //   // Live Data Version

  //   fetch('http://192.241.210.120:1337/api/v1/trends/articles?id=2')
  //   .then(function(res) {
  //     context.props.requestArticles(JSON.parse(res._bodyText));
  //   })
  //   .catch(function(err) {
  //     console.log("SOMETHING WENT WRONG", err);
  //   });
  // }

  navigate() { 
    this.props.navigator.push({ 
      name: 'Trend'
    }); 
  }

  render() {
    const { state, actions } = this.props;
    // console.log('THIS PASSES', this.props.articlesData);
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
            { this.props.articlesData.length ? 
                this.props.articlesData.map((article, index) => 
                   <Publication
                      publication={'Washington Post'}
                      headline={article.title} 
                      url={article.article_url}
                      moodScore= {15}
                      key={index} />)
              : <View><Text>Loading ...</Text></View> } 
 

          </ScrollView>
        
        </View>   
    )
	}
}

function mapStateToProps(state) {
	return {
		articlesData: state.articlesData

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(storyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Story);

// export default connect(mapStateToProps, mapDispatchToProps)(Story;
