import React, { Component, PropTypes, LinkingIOS } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions, WebView, TouchableOpacity, Slider, InteractionManager } from 'react-native';
import Sldr from 'react-native-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';

// Styles & Fonts
import styles from './styles.js';

// Components 
import SentimentGraph from './SentimentGraph';
import EmotionGraph from './EmotionGraph';



class Publication extends Component {
	handleOnPress(url) {
		let articleUrl = this.props.url;
		if ( articleUrl[0] !== 'h') {
      articleUrl = 'http://' + this.props.url
		}
		InteractionManager.runAfterInteractions(() => {
			Communications.web(articleUrl);
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

					{/* MoodScore Graph  */}
		      <View style={styles.moodScore}>
		        {/*  Slider is Now SentimentGraph in Dash
		        <Sldr
		          minimumValue = {-100}
		          maximumValue = {100}
		          minimumTrackTintColor = '#fff'
		          maximumTrackTintColor = '#fff'
		          thumbTintColor = '#fff'
		          disabled = { true }
		          value={this.props.moodScore} />*/}
	          
          </View>

	      </View>

				{/* Second Row => Headline Text */}
	      <View style={styles.headline}>

	        <TouchableOpacity 
	          onPress={this.handleOnPress.bind(this)} 
	          style={{flex: 1, flexWrap: 'wrap'}}>

			      <Text style={styles.headlineText}
			        numberOfLines={3}>
			        {this.props.headline}
			        { ' ' }
			      </Text>
			      
		      </TouchableOpacity>

	      </View>

	      <View style={styles.dashCard}>

		      <View style={styles.dashHeaders}>
			      <Text style={styles.dashHeadersText}>
			        EMOTION GRAPH
			      </Text>
		      </View>

		      <View style={styles.dashHeaders}>
			      <Text style={styles.dashHeadersText}>
			        SENTIMENT GRAPH
			      </Text>
		      </View>
	      </View>
	      <View style={styles.dashCard}>

		      <View style={styles.dashHeaders}>

            <View style={{flexDirection: 'row'}}>
			        <View style={styles.dashEmotionScore}>
					      <Text style={styles.dashEmotionScoreText}>
					        {this.props.article.anger}
					      </Text>
			        </View>

			        <View style={styles.dashEmotionScore}>
	   			      <Text style={styles.dashEmotionScoreText}>
					        {this.props.article.disgust}
					      </Text>
			        </View>

			        <View style={styles.dashEmotionScore}>
	   			      <Text style={styles.dashEmotionScoreText}>
					        {this.props.article.fear}
					      </Text>
			        </View>

			        <View style={styles.dashEmotionScore}>  
	  			      <Text style={styles.dashEmotionScoreText}>
					        {this.props.article.joy}
					      </Text>
			        </View>

			        <View style={styles.dashEmotionScore}>
					      <Text style={styles.dashEmotionScoreText}>
					        {this.props.article.sadness}
					      </Text>
			        </View>
		        </View>

		      </View>

		      <View style={styles.dashSentimentScore}>
			      <Text style={styles.dashSentimentScoreText}>
			        {this.props.article.score}
			      </Text>
		      </View>
	      </View>

	      <View style={styles.cardFooter}>

          <View style={{flex: 1, alignItems: 'center', marginLeft: 5}}>
	          <EmotionGraph article={this.props.article} />
	        </View>

	        <View style={{flex: 1, alignItems: 'center'}}>
	          <SentimentGraph article={this.props.article} />
	        </View>

  		      <View>
				      <Text style={styles.link}>
				        <Icon name="ios-link" size={18} color="#5d5d5d"></Icon>
				      </Text>
			      </View>

		      </View>
   

	    </View>
		)
	}
}

export default Publication;
