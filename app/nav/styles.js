import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';  

let styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  preTitle: {
    fontSize: 12,
    color: '#474e56',
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    color: '#1d3037',
    fontFamily: 'AvenirNext-Bold',
    textShadowColor: '#1fbba6',
    textShadowRadius: 1,
    textShadowOffset: {
      height: 1.5,
      width: 1.5
    },
    textAlign: 'center'
  },
  tagline: {
    fontSize: 14,
    color: '#474e56',
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
    marginBottom: 30
  }
});

export default styles;