import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';

// Actions & Store
import Store from '../store.js';
import * as trendActions from './trendActions';
// import * as storyActions from '../story/storyActions';
// Dummy Data
// import trends from '../data/trends';

// Styles & Fonts
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

// Components
import Nav from '../nav/Nav';
import DataSquare from './DataSquare';
import EndSquare from './EndSquare';


// Shared Values
let deviceWidth = ( Dimensions.get('window').width / 2 )
let deviceHeight = ( Dimensions.get('window').height / 2 )

class Trend extends Component {
  componentWillMount() {
    this.prepopulateData.bind(this)();
  }

  prepopulateData() {
    var context = this;

    // Dummy Data Version 
    // context.props.requestTrends({trends: trends});

    // Live Data Version

    fetch('http://192.241.210.120:1337/api/v1/trends')
    .then(function(res) {
      let trends = JSON.parse(res._bodyText);
      let firstNth = [];
      let n = 15;
      for ( var i = 0; i < n; i++) {
        firstNth.push(trends[i]);
      }
      context.props.requestTrends({trends: firstNth});
    })
    .catch(function(err) {
      console.log("An error occured under prepopulateData", err);
    });
  }

  navigate(id) { 
    // this.loadArticles(id);
    let context = this;

    fetch('http://192.241.210.120:1337/api/v1/articles/?id=' + id)
    .then(function(res) {
      context.props.requestArticles(JSON.parse(res._bodyText));
      context.props.navigator.push({ name: 'Story' })
    })
    .catch(function(err) {
      console.log("An error occured under navigate", err);
    });

    // context.props.navigator.push({ name: 'Story' }); 
  }


  render() {
    const { state, actions } = this.props;
  

    return (
      <View style={styles.body}>

        <ScrollView
         ref={(scrollView) => { _scrollView = scrollView; }}
         automaticallyAdjustContentInsets={false}
         scrollEventThrottle={200} >

          <Nav />

          <View style={styles.trendRows}>
            {/* Check async return on trendsData */}
            { this.props.trendsData.trends ? 
                this.props.trendsData.trends.map((trend, i) =>

                  <TouchableOpacity
                    onPress={this.navigate.bind(this, trend.id)}
                    key={i}>

                    {/* Component Containting Trend Data */}
                    <DataSquare key={i} index={i} data={trend} />

                  </TouchableOpacity> 
                ) 
              : <EndSquare /> }
               
            
          
          </View>

       </ScrollView> 
      </View>
    )
  }

} 

// bring in from state parts that this component is interested in
function mapStateToProps(state) {
  return {
    trendsData: state.trendsData,
    articlesData: state.articlesData,

    currentDate: function() {
      return new Date().toDateString();
    }()

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(trendActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trend);
