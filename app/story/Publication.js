import React, { Component, PropTypes, LinkingIOS } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions, WebView, TouchableOpacity, Slider, InteractionManager } from 'react-native';
import Sldr from 'react-native-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';

// Styles & Fonts
import styles from './styles.js';

// Components 




class Publication extends Component {
	handleOnPress(url) {
		let articleUrl = this.props.url;
		if ( articleUrl[0] !== 'h') {
      articleUrl = 'http://' + this.props.url
		}
		InteractionManager.runAfterInteractions(() => {
			Communications.web('articleUrl');
		});
	}

	render() {
		return (
	    <View>

        {/* First Row => Pub & Graph Info */}
		    <View style={styles.firstRow}>

		      {/* Publication */}
			    <View style={styles.publication}>
			      <Text style={styles.publicationText}>
			        <Icon name="md-paper" size={17} color="#ffffff"></Icon>
			        { '   ' }
			        {this.props.publication}
			      </Text>
		      </View>

					{/* MoodScore Score #  */}
		      <View>
		        <Text style={styles.publicationText}>
		          {this.props.moodScore}
		        </Text>
		      </View>

					{/* MoodScore Graph  */}
		      <View style={styles.moodScore}>
		        <Sldr
		          minimumValue = {-100}
		          maximumValue = {100}
		          minimumTrackTintColor = '#fff'
		          maximumTrackTintColor = '#fff'
		          thumbTintColor = '#fff'
		          disabled = { true }
		          value={this.props.moodScore} />
	          
          </View>

	      </View>

				{/* Second Row => Headline Text */}
	      <View style={styles.headline}>

	        <TouchableOpacity 
	          onPress={this.handleOnPress.bind(this)} 
	          style={{flex: 1, flexWrap: 'wrap'}}>

			      <Text style={styles.headlineText}
			        numberOfLines={2}>
			        {this.props.headline}
			        { ' ' }
			      </Text>
			      
		      </TouchableOpacity>

	      </View>

	      <View style={styles.cardFooter}>
	        <Text style={{flex: 15}}>
	         {' '}
	        </Text>
		      <Text style={styles.link}>
		        <Icon name="ios-link" size={18} color="#5d5d5d"></Icon>
		      </Text>

	      </View>

	    </View>
		)
	}
}

export default Publication;
