import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import Store from '../store.js';
import styles from './styles.js';
import articlesData from '../data/trendsData';
// import DashContainer from './DashContainer';
import * as trendActions from './trendActions';

let deviceWidth = ( Dimensions.get('window').width / 2 )
let deviceHeight = ( Dimensions.get('window').height / 2 )

class Trend extends Component {
  componentWillMount() {
    this.prepopulateData.bind(this)();
  }

  prepopulateData() {
    var context = this;

    fetch('http://192.241.210.120:1337/api/v1/dashboard')
    .then(function(res) {
      context.props.requestTrends(JSON.parse(res._bodyText));
    })
    .catch(function(err) {
      console.log("SOMETHING WENT WRONG", err);
    });
  }

  navigate() { this.props.navigator.push({ name: 'Story' }); }

  render() {
    const { state, actions } = this.props;
    return (
      <View style={styles.body}>

        <ScrollView
         ref={(scrollView) => { _scrollView = scrollView; }}
         automaticallyAdjustContentInsets={false}
         scrollEventThrottle={200} >
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

          {/*<Text style={styles.date}>{this.props.currentDate}</Text>*/}

          <View style={{backgroundColor: '#f4f4f4', flexDirection: 'row', }}>
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

            <View style={{backgroundColor: '#323a45', flex: 1, height: deviceWidth}}>
              
              <View style={{ alignItems: 'flex-end' }}>
                <Text>
                  Top
                </Text>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text style={{fontSize: 25, fontFamily: 'Oswald', color: '#eaedf1'}}>
                  End
                </Text>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Text>
                  Bottom
                </Text>
              </View>

            </View>
          </View>


          {/* <ListView
            dataSource={this.props.dataSource}
            {...actions}
            renderRow = { this.renderRow.bind(this) }
            enableEmptySections={true} /> */}
       </ScrollView>
      </View>
    )
  }

  // individual components for ListView
  renderRow(trend) {

    var navigate = function() {
      this.props.navigator.push({
        name: 'Story',
      });
    }.bind(this)

    return (
      <View style={styles.card} >
        <TouchableHighlight style={styles.full} onPress={ navigate }>
          <Text style={styles.trendRow} >{trend.trend_name}</Text>
        </TouchableHighlight>
      </View>
    );

  }
}

// bring in from state parts that this component is interested in
function mapStateToProps(state) {
  return {
    trendsData: state.trendsData,

    currentDate: function() {
      return new Date().toDateString();
    }(),

    // for ListView
    dataSource: function() {

      var currentTrends = state.dataSource.cloneWithRows(state.trendsData.trends || []);

      currentTrends._dataBlob.s1.sort(function(a, b) {
        if (a.rank < b.rank) {
            return -1;
          }
          if (a.rank > b.rank) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });

      return currentTrends;
    }()
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(trendActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trend);
