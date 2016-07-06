import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  body: {
    backgroundColor: '#eaedf1',
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#00afd1',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  publication: {
    flex: 3
  },
  publicationText: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#ffffff'
  },
  headline: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: '#eaedf1',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 6,
      width: 0
    }
  },
  headlineText: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Georgia-BoldItalic',
    color: '#777777',
    textShadowColor: '#c8d2db',
    textShadowRadius: 0.5,
    textShadowOffset: {
      height: 1,
      width: 1
    },
    fontSize: 18
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 11,
    borderBottomColor: '#eaedf1',
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 7,
      width: 0
    }
  },
  link: {
    flex: 1,
    alignItems: 'flex-end'
  },
  moodScore: {
    flex: 1,
    marginLeft: 10
  },
  bar: {
    flex: 1,
    borderRadius: 5,
    height: 4,
    backgroundColor: '#ffffff',
  },
  trendRow: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  full: {
    flex: 1
  }
});

export default styles;
