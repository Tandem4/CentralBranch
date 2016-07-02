import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, ListView, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';

// Actions & Store
import Store from '../store.js';
import articlesData from '../data/trendsData';
import * as trendActions from './trendActions';

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

          <Nav />

          {/*<Text style={styles.date}>{this.props.currentDate}</Text>*/}

          <View style={styles.trendRows}>
            {/* Check async return on trendsData */}
            { this.props.trendsData.trends ? 
                this.props.trendsData.trends.map((trend, i) => 
                    <DataSquare key={i} index={i} data={trend} /> 
                ) 
              : <Text>Loading Trends ...</Text> }
            <EndSquare />
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
