import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  body: {
    backgroundColor: '#eaedf1',
    flex: 1,
  },
  preTitle: {
    fontSize: 12,
    color: '#9ea7b3',
    fontFamily: 'Silom',
    textAlign: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    color: '#1d3037',
    fontFamily: 'Silom',
    textAlign: 'center'
  },
  tagline: {
    fontSize: 12,
    color: '#9ea7b3',
    fontFamily: 'Silom',
    textAlign: 'center',
    marginBottom: 30
  },
  date: {
    flex: 1,
    textAlign: 'center',
    paddingBottom: 20
  }
});

export default styles;
